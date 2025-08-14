import { messageBus } from "../services/message-bus";
import Won from "../states/won";
import Lose from "../states/lose";
import type { StateParams } from "../models/state-params";

export default function Playing({ data }:StateParams) {
    const subst = '???'

    function handleClick(cardId: number) {
        const currentCard = data.find(card => card.id === cardId)  
        if (currentCard && currentCard.id === 3) {
            console.log('You found the King!')
            messageBus.message$.next(<Won data={data} />)
        }
        else {
            console.log('Wrong choice!')
            messageBus.message$.next(<Lose data={data} />)
        }
    }

    return (
        <div>
            <h1>Playing State</h1>
            <h3>Where is the King ♣? Click on the card to check...</h3>
            <div className="cards">
                {data.map(card => (
                    <div 
                    onClick={() => handleClick(card.id)}
                    key={card.id} 
                    className="card">{subst}</div>
                ))}
            </div>
        </div>
    )
}