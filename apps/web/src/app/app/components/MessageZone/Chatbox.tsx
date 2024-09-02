import { Button, TextArea } from "@radix-ui/themes"
interface PropType {
	className?: string
}
export default function Chatbox({ className }: PropType) {
	return (
		<div className={`flex items-center gap-2 bg-neutral-900 rounded-xl p-2 ${className}`}>
			<TextArea
				radius="full"
				size="3"
				placeholder="Message #ชื่อห้อง"
				className="!w-full"
			></TextArea>
			<Button className="!cursor-pointer">ส่ง</Button>
		</div>
	)
}
