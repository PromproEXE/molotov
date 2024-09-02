"use client"
import React from "react"
import ChannelList from "./components/ChannelZone/channelList"
import { SessionProvider } from "next-auth/react"
import RoomList from "./components/RoomZone/RoomList"
import MessageZone from "./components/MessageZone/MessageZone"
import MemberList from "./components/MemberZone/MemberList"

export default function MainApp() {
	return (
		<SessionProvider>
			<div className="w-screen h-screen flex">
				{/* Channel Lists */}
				<div className="w-[5%] h-screen overflow-y-auto bg-neutral-900 py-3">
					<ChannelList></ChannelList>
				</div>

				{/* Room Lists */}
				<div className="w-[18%] h-screen bg-neutral-800 rounded-e-2xl overflow-hidden">
					<RoomList></RoomList>
				</div>

				{/* Message Lists */}
				<div className="w-[57%] h-screen bg-neutral-700">
					<MessageZone></MessageZone>
				</div>

				{/* Member Lists */}
				<div className="w-[20%] h-screen bg-neutral-800 rounded-s-2xl overflow-hidden">
					<MemberList></MemberList>
				</div>
			</div>
		</SessionProvider>
	)
}
