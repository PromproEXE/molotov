import { Button } from "@radix-ui/themes"

interface PropsType {
	onClick: Function
}

export default function ChannelButton({ onClick }: PropsType) {
	return (
		<div className="!p-1 !px-3 ">
			<Button
				radius="full"
				className="!cursor-pointer !w-[3.25rem] !h-[3.25rem]"
				onClick={() => onClick()}
			>
				+
			</Button>
		</div>
	)
}
