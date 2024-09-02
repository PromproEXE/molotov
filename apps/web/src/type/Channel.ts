import { ChannelGroup } from "./ChannelGroup"
import { ChannelMember } from "./ChannelMember"
import { ChannelRoom } from "./ChannelRoom"
import { User } from "./User"

export interface ChannelPayload {
	name: string
	channelProfileImg: string | null
}

export interface Channel {
	id: string
	name: string
	channelProfileImg: string | null
	createdAt: string
	createdById: string
	createdBy?: User
	updatedAt: string
	members?: ChannelMember[]
	groups?: ChannelGroup[]
	rooms?: ChannelRoom[]
}
