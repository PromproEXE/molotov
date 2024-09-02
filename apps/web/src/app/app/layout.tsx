"use client"
import React from "react"
import { SessionProvider } from "next-auth/react"

export default function MainLayout({ children }: { children: Readonly<React.ReactNode> }) {
	return <SessionProvider>{children}</SessionProvider>
}
