import axios, { AxiosRequestConfig } from "axios"
import { getSession } from "next-auth/react"
export default async function UseApiHook<T>(
	path: string,
	options: Omit<AxiosRequestConfig<any>, "url"> = {}
) {
	const session = await getSession()
	return axios<T | null>({
		...options,
		url: `${process.env.NEXT_PUBLIC_API_URL}${path}`,
		headers: {
			...(options.headers || {}),
			Authorization: `bearer ${session?.accessToken}`,
		},
	})
}
