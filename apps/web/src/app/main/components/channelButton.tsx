import * as Tooltip from "@radix-ui/react-tooltip"
import { Avatar } from "@radix-ui/themes"
import clsx from "clsx"

export default function ChannelButton({ name, isActive }: { name: string; isActive: boolean }) {
	console.log("asdas")
	const activeClass = clsx("border-l-4", "border-white", { "border-white": isActive })
	return (
		<div className={activeClass}>
			<Tooltip.Provider>
				<Tooltip.Root delayDuration={100}>
					<Tooltip.Trigger className="w-full flex justify-center">
						<Avatar
							size="4"
							src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=512&h=512&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
							fallback="?"
						></Avatar>
					</Tooltip.Trigger>

					<Tooltip.Portal>
						<Tooltip.Content
							side="right"
							className="p-1 px-3 text-white bg-black font-medium text-center transition shadow rounded-lg"
						>
							<p>{name}</p>
							<Tooltip.Arrow className="fill-black drop-shadow"></Tooltip.Arrow>
						</Tooltip.Content>
					</Tooltip.Portal>
				</Tooltip.Root>
			</Tooltip.Provider>
		</div>
	)
}
