import { useState } from "react"
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";
import WordSelector from "./components/WordSelector";

function App() {
  const [letters, setLetters] = useState([]);

  function handleAddLetter(letter) {
      setLetters(prevLetters => [...prevLetters, letter]);
  }

  return (
    <>
      <WordSelector />
      <TypeLetterForm onAddLetter={handleAddLetter}/>
      <TypedLetterList letters={letters} />
    </>
  )
}

export default App
