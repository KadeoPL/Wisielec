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
  let isWrongLetter = false;
  
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

  /*function startNewGame(){
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setMaskedWord(maskWord(newRandomWord.word.split('')));
    setLetters([]);
    setLives(3);
  }*/

  function handleAddLetter(letter) {
    const newLetter = {char: letter, className: ''};
    
    if(randomWord.word.includes(letter)){
      newLetter.className = 'correct';
      checkLetterInWordAndUpdateMask(letter);
    } else {
      newLetter.className = 'incorrect';
      setLives(prevLives => prevLives - 1);
      isWrongLetter = true;
    }
    
    setLetters(prevLetters => [...prevLetters, newLetter]);
  }



  /*function maskWord(wordToMask){
    let anonymizeWord = '';
    for (let i = 0; i< wordToMask.length; i++) {
      anonymizeWord += '_';
    }
  }*/

  function checkLetterInWordAndUpdateMask(letter) {
    if (randomWord.word.includes(letter)) {
      const newMaskedWord = randomWord.word
        .split('')
        //.map((char) => (letters.map(l => l.char).includes(char) || char === letter ? char : '_'))
        .map((char) => (letters.map(l => l.char).includes(char) || char === letter ? char : (char === ' ' ? ' ' : '_')))
        .join('');
      setMaskedWord(newMaskedWord);

      if (!newMaskedWord.includes('_')) {
        alert(`You win! The word is: ${randomWord.word}`);
        startNewGame();
    }}
  }

  /*function checkLetterInWord(word){
    const randomWordArray = word.split('');
  }*/

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
          <button onClick={startNewGame}>Generate new word</button>
        </div>
        <Lives lives={lives}/>
      </div>
    </div>
  )
}

export default App
