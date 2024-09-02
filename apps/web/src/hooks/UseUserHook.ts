import { User, UserPayload } from "../type/User"
import UseApiHook from "./UseApiHook"
export default function UseUserHook() {
	async function create(payload: UserPayload): Promise<User | null> {
		try {
			const { data } = await UseApiHook<User>("/v1/users/create", {
				method: "POST",
				data: payload,
			})

			if (!data) throw new Error("NO RESPONSE")

			return data
		} catch (err) {
			return null
		}
	}

	return {
		create,
	}
}
