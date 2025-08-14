import { BehaviorSubject } from 'rxjs';

class MessageBus {
    message$ = new BehaviorSubject<React.ReactElement | undefined>(undefined);
}

export const messageBus = new MessageBus();