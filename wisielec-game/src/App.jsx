import { useState } from "react"
import TypedLetterList from "./components/TypedLettersList";

function App() {
  const [letters, setLetters] = useState([]);

  const handleAddLetter = () => {
    const newLetter = 'P';
    setLetters(prevLetters => [...prevLetters, newLetter]);
  }

  return (
    <>
      <button onClick={handleAddLetter}>Ok</button>
      <TypedLetterList letters={letters} />
    </>
  )
}

export default App
