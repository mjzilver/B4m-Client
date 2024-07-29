export interface SocketResponse {
    command: string;
    message?: SocketMessage;
    messages?: Array<SocketMessage>;
    channels?: Array<SocketChannel>;
    users?: Array<SocketUser>;
}

export interface SocketUser {
    id: number;
    name: string;
    password?: string;
    joined: number;
    color: string;
}

export interface SocketChannel {
    id: number;
    name: string;
    color: string;
    created: number;
    password?: string;
}

export interface SocketMessage {
    user_id: number;
    text: string;
    time: number;
    channel_id: number;
}