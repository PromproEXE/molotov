import * as Tooltip from "@radix-ui/react-tooltip"
import { Avatar } from "@radix-ui/themes"
import clsx from "clsx"

interface PropType {
	isHover: boolean
	isActive: boolean
}

export default function ChannelButton({ isActive, isHover }: PropType) {
	const activeDotClass = clsx(
		"w-1",
		"bg-white",
		"rounded-e-xl",
		{ "h-7": isHover },
		{ "h-2": !isHover }
	)

	return (
		<div className="flex items-center cursor-pointer ">
			<div className={activeDotClass}></div>
			<Avatar
				size="4"
				radius="full"
				className="!bg-purple-200 hover:!rounded-xl !m-1 !mx-3"
				src="/lavender.svg"
				fallback="?"
			></Avatar>
		</div>
	)
}
