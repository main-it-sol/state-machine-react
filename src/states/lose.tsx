import type { StateParams } from "../models/state-params";
import { messageBus } from "../services/message-bus";
import Ready from "../states/ready";

export default function Lose({ data }:StateParams) {

    function handleClick() {
        messageBus.message$.next(<Ready data={data} />);
    }

    return (
        <div>
            <h1>Lose, wrong choice, but keep trying!</h1>
            <button onClick={handleClick}>Replay</button>
        </div>
    )
}