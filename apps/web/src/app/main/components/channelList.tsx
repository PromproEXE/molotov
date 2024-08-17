import ChannelButton from "./channelButton"

export default function ChannelList() {
	return (
		<div className="space-y-5">
			<ChannelButton name="EIEI" isActive={true}></ChannelButton>
			<ChannelButton name="EIEI" isActive={true}></ChannelButton>
			<ChannelButton name="EIEI" isActive={true}></ChannelButton>
			<ChannelButton name="EIEI" isActive={true}></ChannelButton>
			<ChannelButton name="EIEI" isActive={false}></ChannelButton>
			<ChannelButton name="EIEI" isActive={true}></ChannelButton>
		</div>
	)
}
