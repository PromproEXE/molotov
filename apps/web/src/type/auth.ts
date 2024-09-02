import { User } from "./User"

export interface LoginPayload {
	username: string
	password: string
}

export interface LoginResponse {
	token: string
	user: User
}
