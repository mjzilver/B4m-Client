/* eslint-disable @typescript-eslint/no-unused-vars */
import { Channel } from "../types/channel";
import { Message } from "../types/message";
import { User, UserLogin } from "../types/user";

export class MockWebsocketService {
	sendMessage(message: Message) { }
	attemptLogin(user: UserLogin) { }
	registerUser(user: UserLogin) { }
	leaveChannel(channel: Channel, user: User) { }
	logout(user: User, channel: Channel | null) { }
}