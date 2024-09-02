import { User as UserResponse } from "@web/src/type/User"
import NextAuth from "next-auth"
import { DefaultJWT, JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT extends UserResponse, DefaultJWT {
		accessToken: string
	}
}

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: UserResponse & { accessToken: string }
		accessToken: string
	}

	interface User extends UserResponse {
		accessToken: string
	}
}
