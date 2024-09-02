import DownIcon from "../../../component/icon/down"
export default function ChannelMetadata() {
	return (
		<div className="flex justify-between cursor-pointer bg-neutral-800 hover:bg-neutral-700/50 p-3 border-b-2 border-neutral-900 transition">
			<p className="font-medium text-lg">ห้องคุย</p>
			<div className="flex items-center">
				<DownIcon size={25}></DownIcon>
			</div>
		</div>
	)
}
