import { Metadata } from "next"
import React from "react"
import ChannelList from "./components/channelList"

export const metadata: Metadata = {
	title: "Molotov",
}

export default function MainLayout({ children }: { children: Readonly<React.ReactNode> }) {
	return (
		<div className="w-screen h-screen flex">
			{/* Channel Lists */}
			<div className="w-[5%] h-screen overflow-y-auto bg-neutral-900 py-3">
				<ChannelList></ChannelList>
			</div>

			{/* Room Lists */}
			<div className="w-[18%] h-screen bg-neutral-800"></div>

			{/* Message Lists */}
			<div className="w-[57%] h-screen bg-neutral-700"></div>

			{/* Member Lists */}
			<div className="w-[20%] h-screen bg-neutral-800"></div>
		</div>
	)
}
