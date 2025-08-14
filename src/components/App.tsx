import './App.css'
import StateMachine from '../models/state-machine'
import type { Card } from '../models/card'

function App() {
  const cards: Card[] = [
    { id: 1, name: 'Ace ♦' },
    { id: 2, name: 'Ace ♥' },
    { id: 3, name: 'King ♣' },
  ]

  return (
    <>
      {StateMachine(cards)}
    </>
  )
}

export default App
