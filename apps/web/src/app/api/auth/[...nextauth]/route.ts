import NextAuth, { DefaultSession } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import UseApiFetch from "../../../../hooks/UseApiHook"
import { LoginResponse } from "../../../../type/auth"
import { User as UserResponse } from "../../../../type/User"

const handler = NextAuth({
	providers: [
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				username: {},
				password: {},
			},
			authorize: async (credentials) => {
				try {
					const { data } = await UseApiFetch<LoginResponse>("/v1/auth/login", {
						method: "POST",
						data: {
							username: credentials?.username,
							password: credentials?.password,
						},
					})

					if (!data) return null

					return { ...data.user, accessToken: data.token }
				} catch (err) {
					throw new Error("EMAIL/PHONE NUMBER OR PASSWORD NOT MATCH")
				}
			},
		}),
	],
	callbacks: {
		async jwt({ user, token }) {
			return { ...token, ...user }
		},
		async session({ session, token }) {
			session.user = token
			session.accessToken = token.accessToken
			return session
		},
	},
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/login",
	},
})

export { handler as GET, handler as POST }
