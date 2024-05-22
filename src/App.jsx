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
      anonymizeWord += '*';
    }
    return anonymizeWord;
  }

  function checkLetterInWordAndUpdateMask(letter) {
    if (randomWord.word.includes(letter)) {
      const newMaskedWord = randomWord.word
        .split('')
        .map((char) => (letters.map(l => l.char).includes(char) || char === letter ? char : '*'))
        .join('');
      setMaskedWord(newMaskedWord);

      if (!newMaskedWord.includes('*')) {
        alert('You win!');
        startNewGame();
    }}
  }

  useEffect(() => {
    if (lives === 0) {
      alert('You lose! Try again!');
      startNewGame();
    }
  }, [lives]);
  
  return (
    <div className="container">
      <div className='game'>
        <div>
          <p className='masked-text'>{maskedWord}</p>
          <p className='hint-text'>Hint: {randomWord.hint}</p>
        </div>
        <TypeLetterForm onAddLetter={handleAddLetter} randomWord={randomWord.word} />
        <p className="description">Typed letters:</p>
        <TypedLetterList letters={letters}/>
        <button onClick={startNewGame}>Generate new word</button>
        <Lives lives={lives}/>
      </div>
    </div>
  )
}

export default App
