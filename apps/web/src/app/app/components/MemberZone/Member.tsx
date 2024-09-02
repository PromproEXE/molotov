import { Avatar, Text } from "@radix-ui/themes"

// INTERFACE
interface PropType {
	className?: string
}

export default function Member({ className }: PropType) {
	return (
		<div
			className={`w-full hover:bg-neutral-700 p-2 cursor-pointer flex gap-3 items-center rounded-xl ${className}`}
		>
			<Avatar
				size="4"
				className="!w-10 !h-10"
				radius="full"
				src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=512&h=512&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
				fallback="?"
			></Avatar>
			<Text as="p" className="!font-bold">
				EIEI
			</Text>
		</div>
	)
}
