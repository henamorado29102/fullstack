import { useState } from 'react'

import './App.css'

function App() {
  const [title, setTitle] = useState('');

  async function createDeck(e: React.FormEvent){
    e.preventDefault()
    await fetch("http://localhost:5000/deck", {
      method: "POST",
      body: JSON.stringify({title}),
      headers: {
        "Content-type": "application/json"
      }
    })
    setTitle("");
  }
  return <div  className="App">
    <form onSubmit={createDeck}>
      <label htmlFor='deck-title'>Deck title</label>
      <input id='deck-title' value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      }}
      />
      <button>Send</button>
    </form>
  </div>;
}

export default App
