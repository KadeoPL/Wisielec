import { useState } from "react"
import Letter from "./components/letter"

function App() {
  const [letters, setLetters] = useState([]);

  const handleAddLetter = () => {
    const newLetter = 'P';
    setLetters(prevLetters => [...prevLetters, newLetter]);
  }

  return (
    <>

      <button onClick={handleAddLetter}>Ok</button>
      <div>
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter}></Letter>
        ))}
      </div>
    </>
  )
}

export default App
