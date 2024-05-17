import { useEffect, useState } from "react"
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";
import { getRandomWord } from "./components/WordSelector";

function App() {
  const [letters, setLetters] = useState([]);
  const [randomWord, setRandomWord] = useState('');

  useEffect(() => {
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
  }, [])

  function handleAddLetter(letter) {
      setLetters(prevLetters => [...prevLetters, letter]);
  }

  function handleGenerateWord(){
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
  }

  return (
    <>
      <div>
        <p>{randomWord.word}</p>
        <p>{randomWord.category}</p>
      </div>
      <TypeLetterForm onAddLetter={handleAddLetter}/>
      <TypedLetterList letters={letters} />
      <button onClick={handleGenerateWord}>Generate new word</button>
    </>
  )
}

export default App
