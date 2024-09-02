import { Button, Flex, Text } from "@radix-ui/themes"
export default function RoomMetadata() {
	return (
		<Button radius="medium" className="!cursor-pointer !w-full !py-5">
			<div className="flex justify-between gap-3 w-full">
				<Text size="3">ชื่อห้อง</Text>
			</div>
		</Button>
	)
}
