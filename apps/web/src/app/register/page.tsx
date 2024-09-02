"use client"
import { Text, TextField, Box, Button, Link } from "@radix-ui/themes"
import UseUserHook from "@web/src/hooks/UseUserHook"
import { UserPayload } from "@web/src/type/User"
import { useState } from "react"

export default function Register() {
	// VARIABLE
	const [userForm, setUserForm] = useState<UserPayload>({
		name: "",
		email: "",
		username: "",
		password: "",
	})
	const { create } = UseUserHook()

	// FUNCTION
	const setName = (value: string) => setUserForm({ ...userForm, name: value })
	const setEmail = (value: string) => setUserForm({ ...userForm, email: value })
	const setUsername = (value: string) => setUserForm({ ...userForm, username: value })
	const setPassword = (value: string) => setUserForm({ ...userForm, password: value })

	async function createUser() {
		const user = await create(userForm)
		if (!user) return
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center bg-purple-700">
			<div className="bg-neutral-800 p-8 rounded-xl w-4/12 shadow-lg space-y-5">
				<Text as="p" className="font-bold text-white text-3xl text-center">
					Create an account
				</Text>

				<div>
					<Text
						as="label"
						className="uppercase font-medium text-neutral-400 block mb-1 required"
					>
						EMAIL
					</Text>
					<TextField.Root
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						size="3"
					></TextField.Root>
				</div>

				<div>
					<Text
						as="label"
						className="uppercase font-medium text-neutral-400 block mb-1 required"
					>
						DISPLAY NAME
					</Text>
					<TextField.Root
						onChange={(e) => setName(e.target.value)}
						size="3"
					></TextField.Root>
				</div>

				<div>
					<Text
						as="label"
						className="uppercase font-medium text-neutral-400 block mb-1 required"
					>
						USERNAME
					</Text>
					<TextField.Root
						onChange={(e) => setUsername(e.target.value)}
						size="3"
					></TextField.Root>
				</div>

				<div>
					<Text
						as="label"
						className="uppercase font-medium text-neutral-400 block mb-1 required"
					>
						PASSWORD
					</Text>
					<TextField.Root
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						size="3"
					></TextField.Root>
				</div>

				<Box>
					<Button
						onClick={() => createUser()}
						type="button"
						size="3"
						className="!mb-2 !w-full !cursor-pointer"
					>
						Continue
					</Button>
					<Link size="2" href="/login">
						Already have an account?
					</Link>
				</Box>
			</div>
		</div>
	)
}
