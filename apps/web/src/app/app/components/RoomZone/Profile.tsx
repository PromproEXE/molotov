import { Avatar, Text } from "@radix-ui/themes"
import { useSession } from "next-auth/react"
interface PropType {
	className?: string
}
export default function Profile({ className }: PropType) {
	const { data: session } = useSession()

	console.log(session)
	return (
		<div className={`bg-neutral-900/90 p-1 flex gap-3 ${className}`}>
			<div className="flex gap-3 cursor-pointer hover:bg-neutral-700 rounded-xl p-2">
				<Avatar
					size="4"
					className="!w-10 !h-10"
					radius="full"
					src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=512&h=512&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
					fallback="?"
				></Avatar>
				<div>
					<Text as="p" className="!font-bold">
						{session?.user?.name}
					</Text>
					<Text color="gray" as="p" size="1">
						#{session?.user?.username}
					</Text>
				</div>
			</div>
		</div>
	)
}
