import { Box, Text, TextField } from "@radix-ui/themes"

export default function Login() {
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-orange-700">
			<div className="bg-neutral-800 p-10 rounded-xl w-8/12 grid grid-cols-3 gap-3 shadow-lg">
				<div className="col-span-2 space-y-7">
					<div>
						<Text as="p" className="font-bold text-white text-3xl text-center">
							Welcome back!
						</Text>
						<Text as="p" className="text-neutral-400 text-center">
							We're so excited to see you again!
						</Text>
					</div>

					<div>
						<Text as="label" className="uppercase text-neutral-400 block mb-1 required">
							EMAIL OR PHONE NUMBER
						</Text>
						<input
							type="text"
							className="py-3 px-4 block w-full border-orange-200 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-orange-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						></input>
					</div>

					<div>
						<Text as="label" className="uppercase text-neutral-400 block mb-1 required">
							PASSWORD
						</Text>
						<input
							type="password"
							className="py-3 px-4 mb-1 block w-full border-orange-200 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-orange-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						></input>
						<a href="#" className="text-blue-400 hover:underline transition">
							Forget your password?
						</a>
					</div>

					<button
						type="button"
						className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					>
						Log In
					</button>
				</div>

				<div>
					<Text as="p" className="text-white font-bold text-center">
						Log in with QR Code
					</Text>
				</div>
			</div>
		</div>
	)
}
