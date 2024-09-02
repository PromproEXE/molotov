import Chatbox from "./Chatbox"
import MessageList from "./MessageList"
import RoomNameMetadata from "./RoomNameMetadata"

export default function MessageZone() {
	return (
		<div className="flex gap-3 flex-col h-screen p-2">
			<RoomNameMetadata></RoomNameMetadata>
			<MessageList></MessageList>
			<Chatbox className="mt-auto"></Chatbox>
		</div>
	)
}
