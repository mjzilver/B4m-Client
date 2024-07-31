import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../../types/message';
import { Channel } from '../../types/channel';
import { MessageUser } from '../../types/user';
import { SocketMessage } from '../../types/socketMessage';

@Injectable({
	providedIn: 'root',
})
export class MessageService {
	private messageSubject = new Subject<Message>();
	messages$ = this.messageSubject.asObservable();

	parseMessages(data: SocketMessage[], channels: Channel[]): void {
		data.forEach((item: SocketMessage) => {
			const channel = channels.find(c => c.id === item.channel_id);
			const user = item.user ? new MessageUser(item.user.id, item.user.name, item.user.color) : undefined;

			if (user && channel) {
				const message = new Message(user, item.text, item.time, channel);
				this.messageSubject.next(message);
			} else {
				console.warn('User or Channel not found for message', item);
			}
		});
	}

	parseMessage(data: SocketMessage, channels: Channel[]): Message {
		const channel = channels.find(c => c.id === data.channel!.id);
		const user = new MessageUser(data.user!.id, data.user!.name, data.user!.color);

		if (!user || !channel) {
			throw new Error('User or Channel not found for message');
		}
		const newMessage = new Message(user, data.text, data.time, channel);

		this.messageSubject.next(newMessage);
		return newMessage;
	}
}
