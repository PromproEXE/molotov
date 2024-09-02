import React, { useEffect, useRef, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Box, Text, TextField, Button } from "@radix-ui/themes"
import { ChannelPayload } from "@web/src/type/Channel"
import UseChannelHook from "@web/src/hooks/UseChannelHook"

interface PropType {
	open: boolean
	closeDialog: Function
}
export default function CreateChannelDialog({ open, closeDialog }: PropType) {
	// VARIABLE
	const [channelForm, setChannelForm] = useState<ChannelPayload>({
		name: "",
		channelProfileImg: null,
	})
	const [disabled, setDisabled] = useState<boolean>(false)
	const { createChannel } = UseChannelHook()

	// FUNCTION
	const setChannelName = (value: string) => setChannelForm({ ...channelForm, name: value })

	async function createNewChannel() {
		setDisabled(true)

		await createChannel(channelForm)

		setDisabled(false)
	}

	return (
		<Dialog.Root open={open}>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-black/70 data-[state=open]:animate-overlayShow fixed inset-0" />
				<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
					{/* TITLE */}
					<Dialog.Title className="text-center text-xl font-bold mb-3">
						Create Your Own Channel
					</Dialog.Title>

					{/* DESCRIPTION */}
					<Dialog.Description className="text-neutral-400 text-sm text-center mb-3">
						Give your new channel a personality with a name. You can always change it
						later.
					</Dialog.Description>

					{/* FIELD: NAME */}
					<div className="mb-5">
						<Text as="label" className="!mb-2">
							Name
						</Text>
						<TextField.Root
							radius="medium"
							size="3"
							value={channelForm.name}
							onChange={(e) => setChannelName(e.target.value)}
						></TextField.Root>
					</div>

					{/* CREATE BUTTON */}
					<div className="mt-[25px] flex justify-end">
						<Button onClick={createNewChannel}>Create</Button>
					</div>

					{/* CROSS CLOSE BUTTON */}
					<Dialog.Close asChild>
						<button
							onClick={() => closeDialog()}
							className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
							aria-label="Close"
						>
							X
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
