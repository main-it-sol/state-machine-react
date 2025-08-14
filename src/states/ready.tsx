import type { StateParams } from "../models/state-params";
import { messageBus } from "../services/message-bus";
import Playing from "../states/playing";

export default function Ready( { data }:StateParams ) {
    function handleClick() {
        const cardIds = data.map(card => card.id);
        
        // Shuffle the cards and transition to the Playing state
        cardIds.sort(() => Math.random() - 0.5)
        setTimeout(() => {
            const shuffled = [];
            for (let i = 0; i < cardIds.length; i++) {
                const card = data.find(c => c.id === cardIds[i]);
                if (card) {
                    shuffled.push(card);
                }
            }

            console.log('Shuffled cards:', shuffled)
            messageBus.message$.next(<Playing data={shuffled}/>);
        }, 500); // Simulate a delay for shuffling
    }
    
    return (
        <div>
            <h1>Click 'Go!' and select King ♣ to win!</h1>
            <button onClick={handleClick}>Go!</button>
            <div className="cards">
                {data.map(card => (
                    <div key={card.id} className="card">{card.name}</div>
                ))}
            </div>
        </div>
    )
}