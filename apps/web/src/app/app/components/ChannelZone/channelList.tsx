import ChannelButton from "./channelButton"
import HomeButton from "./homeButton"
import { Separator } from "@radix-ui/themes"
import AddChannelButton from "./addChannelButton"
import CreateChannelDialog from "./CreateChannelDialog"
import { useState } from "react"

export default function ChannelList() {
	const [createChannelDialogState, setCreateChannelDialog] = useState<boolean>(false)

	const toggleCreateChannelDialog = () => {
		setCreateChannelDialog(!createChannelDialogState)
	}
	return (
		<>
			<div className="space-y-3 overflow-y-auto">
				<HomeButton isActive={true} isHover={false}></HomeButton>
				<div className="!px-3">
					<Separator my="2" size="4"></Separator>
				</div>

				{Array.from(Array(10), (_el, index) => (
					<ChannelButton
						key={index}
						name="EIEI"
						isActive={true}
						isHover={false}
					></ChannelButton>
				))}

				<AddChannelButton onClick={toggleCreateChannelDialog}></AddChannelButton>
			</div>

			<CreateChannelDialog
				closeDialog={toggleCreateChannelDialog}
				open={createChannelDialogState}
			></CreateChannelDialog>
		</>
	)
}
