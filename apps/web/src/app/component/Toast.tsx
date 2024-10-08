import * as Toaster from "@radix-ui/react-toast"
import React from "react"
interface PropsType {
	title: React.ReactNode
	description?: React.ReactNode
	action?: React.ReactNode
	open: boolean
}
export default function Toast({ title, description, action, open }: PropsType) {
	return (
		<Toaster.Provider swipeDirection="right">
			<Toaster.Root
				className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-Toaster-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
				open={open}
			>
				<Toaster.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
					{title}
				</Toaster.Title>
				<Toaster.Description asChild>{description}</Toaster.Description>
				<Toaster.Action
					className="[grid-area:_action]"
					asChild
					altText="Goto schedule to undo"
				>
					{action}
				</Toaster.Action>
			</Toaster.Root>
			<Toaster.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
		</Toaster.Provider>
	)
}
