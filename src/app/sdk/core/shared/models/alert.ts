import { MessageType } from './messageType.model';

export interface Alert {
    name: string;
    message: string;
    type: MessageType;
}
