import { Avatar, Text } from "@radix-ui/themes"
export default function Message() {
	return (
		<div className="flex gap-3 hover:bg-neutral-800 p-2 rounded-xl">
			<Avatar
				size="4"
				className="!w-10 !h-10"
				radius="full"
				src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=512&h=512&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
				fallback="?"
			></Avatar>
			<div>
				<Text as="p" className="!font-bold !text-lg">
					ชื่อคนส่ง
					<Text className="!ml-2 !text-xs !font-normal !text-neutral-400">
						Today 05.00 pm
					</Text>
				</Text>
				<Text as="p">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit,
					consectetur, accusantium quaerat nobis nesciunt sed vel placeat, doloremque quam
					sit quae delectus? Nostrum iusto optio voluptatum magni facere suscipit.
				</Text>
			</div>
		</div>
	)
}
