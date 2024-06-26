import { useCallback, useEffect, useState } from "react"
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";
import { getRandomWord } from "./components/WordSelector";
import Lives from "./components/Lives";
import './index.css';
import 'animate.css';

function App() {
  const [letters, setLetters] = useState([]);
  const [randomWord, setRandomWord] = useState('');
  const [maskedWord, setMaskedWord] = useState('');
  const [lives, setLives] = useState(5);
  const [buttonHovered, setButtonHovered] = useState(false);
  let isWrongLetter = false;

  const toggleHover = () => {
    setButtonHovered(!buttonHovered);
  }
  
  const startNewGame = useCallback (() => {
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setMaskedWord(maskWord(newRandomWord.word.split('')));
    setLetters([]);
    setLives(3);
  }, []);


  useEffect(() => {
    startNewGame();
  }, [startNewGame])

  function handleAddLetter(letter) {
    const newLetter = {char: letter, className: ''};
    
    if(randomWord.word.includes(letter)){
      newLetter.className = 'correct';
    } else {
      newLetter.className = 'incorrect';
      setLives(prevLives => prevLives - 1);
      isWrongLetter = true;
    }
    setLetters(prevLetters => [...prevLetters, newLetter]);
    checkLetterInWordAndUpdateMask(letter);
  }

  function checkLetterInWordAndUpdateMask(letter) {
    if (randomWord.word.includes(letter)) {
      const newMaskedWord = randomWord.word
        .split('')
        .map((char) => (letters.map(l => l.char).includes(char) || char === letter ? char : (char === ' ' ? ' ' : '_')))
        .join('');
      setMaskedWord(newMaskedWord);

      if (!newMaskedWord.includes('_')) {
        alert(`You win! The word is: ${randomWord.word}`);
        startNewGame();
    }}
  }

  function maskWord (wordArray){
      return wordArray.map(char => (char === ' ' ? ' ' : '_')).join('');
  }

  useEffect(() => {
    if (lives === 0) {
      alert(`You lose! Try again! The word is: ${randomWord.word}`);
      startNewGame();
    }
  }, [lives, startNewGame, randomWord.word]);
  
  return (
    <div className="container">
      <div className='game'>
        <div>
          <p className='title-text'>Guess the letter!</p>
          <p className='masked-text'>{maskedWord}</p>
          <p className='hint-text'>Hint: {randomWord.hint}</p>
        </div>
        <TypeLetterForm onAddLetter={handleAddLetter} randomWord={randomWord.word} isWrongLetter={isWrongLetter} />
        <div className="typed-letters-section">
          <p className="typed-letters">Typed letters:</p>
          <TypedLetterList letters={letters}/>
        </div>
        <div className="button-section">
          <button 
            onClick={startNewGame}
            className={buttonHovered ? 'animate__animated animate__pulse' : ''}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            >Generate new word</button>
        </div>
        <Lives lives={lives}/>
      </div>
    </div>
  )
}

export default App
