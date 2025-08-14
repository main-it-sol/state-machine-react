import { useEffect, useState } from "react";
import Ready from "../states/ready";
import { messageBus } from "../services/message-bus";
import type { Card } from "./card";

export default function StateMachine(cards: Card[]) {

    const [currentState, setCurrentState] = useState<React.ReactElement>(<Ready data={cards} />);

    useEffect(() => {
        const sub = messageBus.message$.subscribe({
            next: (msg) => {
                if (!msg) return;
                console.log('Event received.');
                setCurrentState(msg);
            },
            error: (err) => console.error('Error in message bus:', err),
        });

        return () => {
            sub.unsubscribe();
        };
    }, []);

    return (
        <>
            {currentState}
        </>
    );
}