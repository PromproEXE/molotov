import { Channel, ChannelPayload } from "../type/Channel"
import UseApiHook from "./UseApiHook"

export default function UseChannelHook() {
	async function getAllChannel(): Promise<Channel[]> {
		try {
			const { data } = await UseApiHook<Channel[]>("/v1/channels")

			if (!data) throw new Error("NO RESPONSE")

			return data
		} catch (err) {
			console.log(err)
			return []
		}
	}

	async function getChannelById(id: string): Promise<Channel | null> {
		try {
			const { data } = await UseApiHook<Channel>(`/v1/channels/${id}`)

			if (!data) throw new Error("NO RESPONSE")

			return data
		} catch (err) {
			console.log(err)
			return null
		}
	}

	async function createChannel(payload: ChannelPayload): Promise<Channel | null> {
		try {
			const { data } = await UseApiHook<Channel>(`/v1/channels`, {
				method: "POST",
				data: payload,
			})

			if (!data) throw new Error("NO RESPONSE")

			return data
		} catch (err) {
			console.log(err)
			return null
		}
	}

	return {
		getAllChannel,
		getChannelById,
		createChannel,
	}
}
