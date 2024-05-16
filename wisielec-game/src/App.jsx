import { useState } from "react"
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";

function App() {
  const [letters, setLetters] = useState([]);

  const handleAddLetter = () => {
    const newLetter = 'P';
    setLetters(prevLetters => [...prevLetters, newLetter]);
  }

  return (
    <>
      <TypeLetterForm />
      <TypedLetterList letters={letters} />
    </>
  )
}

export default App
