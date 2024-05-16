import { useState } from "react"
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";

function App() {
  const [letters, setLetters] = useState([]);

  function handleAddLetter(letter) {
      setLetters(prevLetters => [...prevLetters, letter]);
  }

  return (
    <>
      <TypeLetterForm onAddLetter={handleAddLetter}/>
      <TypedLetterList letters={letters} />
    </>
  )
}

export default App
