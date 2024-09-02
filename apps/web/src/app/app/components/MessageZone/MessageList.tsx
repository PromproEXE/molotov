import Message from "./Message"

interface PropType {
	className?: string
}
export default function MessageList({ className }: PropType) {
	return (
		<div className={`overflow-y-auto ${className}`}>
			<Message></Message>
			<Message></Message>
			<Message></Message>
			<Message></Message>
			<Message></Message>
			<Message></Message>
			<Message></Message>
			<Message></Message>
		</div>
	)
}
