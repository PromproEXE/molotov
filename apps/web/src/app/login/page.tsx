"use client"

import { Text, TextField, Button, Box, Link } from "@radix-ui/themes"
import NavLink from "next/link"
import { LoginPayload } from "@web/src/type/auth"
import React, { useState } from "react"
import { signIn } from "next-auth/react"

export default function Login() {
	// VARIABLE
	const [loginForm, setLoginForm] = useState<Record<keyof LoginPayload, string>>({
		username: "",
		password: "",
	})

	// FUNCTION
	const setUsername = (value: string) => setLoginForm({ ...loginForm, username: value })

	const setPassword = (value: string) => setLoginForm({ ...loginForm, password: value })

	// UI
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-purple-700">
			<div className="bg-neutral-800 p-10 rounded-xl w-5/12 shadow-lg space-y-5">
				<div>
					<Text as="p" className="font-bold text-white text-3xl text-center">
						Welcome back!
					</Text>
					<Text as="p" className="text-neutral-400 text-center">
						{"We're so excited to see you again!"}
					</Text>
				</div>

				<div>
					<Text
						as="label"
						className="uppercase font-medium text-neutral-400 block mb-1 required"
					>
						EMAIL OR PHONE NUMBER
					</Text>
					<TextField.Root
						size="3"
						type="email"
						value={loginForm.username}
						onChange={(e) => setUsername(e.target.value)}
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
						size="3"
						type="password"
						value={loginForm.password}
						onChange={(e) => setPassword(e.target.value)}
					></TextField.Root>
					<a href="#" className="text-blue-400 hover:underline transition">
						Forget your password?
					</a>
				</div>

				<Box>
					<Button
						type="button"
						size="3"
						onClick={async () => {
							await signIn("credentials", {
								...loginForm,
								callbackUrl: "/app",
							})
						}}
						className="!mb-2 !w-full !cursor-pointer"
					>
						Log In
					</Button>
					<Text as="p">
						Need an account? <Link href="/register">Register</Link>
					</Text>
				</Box>
			</div>
		</div>
	)
}
