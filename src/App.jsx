import { useEffect, useState } from "react"
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";
import { getRandomWord } from "./components/WordSelector";
import './index.css';

function App() {
  const [letters, setLetters] = useState([]);
  const [randomWord, setRandomWord] = useState('');
  const [maskedWord, setMaskedWord] = useState('');

  useEffect(() => {
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setMaskedWord(maskWord(newRandomWord.word));
  }, [])

  function handleAddLetter(letter) {
    setLetters(prevLetters => [...prevLetters, letter]);
    checkLetterInWordAndUpdateMask(letter);
  }

  function handleGenerateWord(){
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setMaskedWord(maskWord(newRandomWord.word));
    setLetters([]);
  }

  function maskWord(wordToMask){
    let anonymizeWord = '';
    for (let i = 0; i< wordToMask.length; i++) {
      anonymizeWord += '*';
    }
    return anonymizeWord;
  }

  function checkLetterInWordAndUpdateMask(letter) {
    if (randomWord.word.includes(letter)) {
      const newMaskedWord = randomWord.word
        .split('')
        .map((char) => (letters.includes(char) || char === letter ? char : '*'))
        .join('');
      setMaskedWord(newMaskedWord);
    } else {
      console.log('The letter is not in the word');
    }
  }

  return (
    <>
      <div>
        <p>{randomWord.word}</p>
        <p>{maskedWord}</p>
        <p>{randomWord.category}</p>
      </div>
      <TypeLetterForm onAddLetter={handleAddLetter} randomWord={randomWord.word}/>
      <p>Typed letters:</p>
      <TypedLetterList letters={letters} />
      <button onClick={handleGenerateWord}>Generate new word</button>
    </>
  )
}

export default App
