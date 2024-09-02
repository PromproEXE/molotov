import ChannelMetadata from "./ChannelMetadata"
import Profile from "./Profile"
import RoomMetadata from "./RoomMetadata"

export default function RoomList() {
	return (
		<div className="h-screen flex flex-col">
			<ChannelMetadata></ChannelMetadata>

			<div className="space-y-3 p-2 !mb-auto">
				<RoomMetadata></RoomMetadata>
			</div>

			<Profile className="!mt-auto"></Profile>
		</div>
	)
}
