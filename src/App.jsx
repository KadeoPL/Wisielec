import { useEffect, useState } from "react"
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";
import { getRandomWord } from "./components/WordSelector";
import './index.css';
import Lives from "./components/Lives";

function App() {
  const [letters, setLetters] = useState([]);
  const [randomWord, setRandomWord] = useState('');
  const [maskedWord, setMaskedWord] = useState('');
  const [lives, setLives] = useState(3);

  useEffect(() => {
    startNewGame();
  }, [])

  function startNewGame(){
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setMaskedWord(maskWord(newRandomWord.word));
    setLetters([]);
    setLives(3);
  }

  function handleAddLetter(letter) {
    const newLetter = {char: letter, className: ''};
    setLetters(prevLetters => [...prevLetters, newLetter]);
    
    if(randomWord.word.includes(letter)){
      newLetter.className = 'correct';
      checkLetterInWordAndUpdateMask(letter);
    } else {
      newLetter.className = 'incorrect';
      setLives(prevLives => prevLives - 1);
    }
  }

  function maskWord(wordToMask){
    let anonymizeWord = '';
    for (let i = 0; i< wordToMask.length; i++) {
      anonymizeWord += '_';
    }
    return anonymizeWord;
  }

  function checkLetterInWordAndUpdateMask(letter) {
    if (randomWord.word.includes(letter)) {
      const newMaskedWord = randomWord.word
        .split('')
        .map((char) => (letters.map(l => l.char).includes(char) || char === letter ? char : '_'))
        .join('');
      setMaskedWord(newMaskedWord);

      if (!newMaskedWord.includes('_')) {
        alert(`You win! The word is: ${randomWord.word}`);
        startNewGame();
    }}
  }

  useEffect(() => {
    if (lives === 0) {
      alert(`You lose! Try again! The word is: ${randomWord.word}`);
      startNewGame();
    }
  }, [lives]);
  
  return (
    <div className="container">
      <div className='game'>
        <div>
          <p className='title-text'>Guess the letter!</p>
          <p className='masked-text'>{maskedWord}</p>
          <p className='hint-text'>Hint: {randomWord.hint}</p>
        </div>
        <TypeLetterForm onAddLetter={handleAddLetter} randomWord={randomWord.word} />
        <div className="typed-letters-section">
          <p className="typed-letters">Typed letters:</p>
          <TypedLetterList letters={letters}/>
        </div>
        <div className="button-section">
          <button onClick={startNewGame}>Generate new word</button>
        </div>
        <Lives lives={lives}/>
      </div>
    </div>
  )
}

export default App
