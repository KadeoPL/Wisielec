import { useCallback, useEffect, useState } from "react";
import TypedLetterList from "./components/TypedLettersList";
import TypeLetterForm from "./components/TypeLetterForm";
import { getRandomWord } from "./components/WordSelector";
import Lives from "./components/Lives";
import "./index.css";
import "animate.css";

function App() {
  const [letters, setLetters] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const [maskedWord, setMaskedWord] = useState("");
  const [lives, setLives] = useState(5);
  let isWrongLetter = false;

  const startNewGame = useCallback(() => {
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setMaskedWord(maskWord(newRandomWord.word.split("")));
    setLetters([]);
    setLives(3);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  function handleAddLetter(letter) {
    const newLetter = { char: letter, isValid: undefined };

    if (randomWord.word.includes(letter)) {
      newLetter.isValid = true;
    } else {
      newLetter.isValid = false;
      setLives((prevLives) => prevLives - 1);
      isWrongLetter = true;
    }
    setLetters((prevLetters) => [...prevLetters, newLetter]);
    checkLetterInWordAndUpdateMask(letter);
  }

  function checkLetterInWordAndUpdateMask(letter) {
    if (randomWord.word.includes(letter)) {
      const newMaskedWord = randomWord.word
        .split("")
        .map((char) =>
          letters.map((l) => l.char).includes(char) || char === letter
            ? char
            : char === " "
            ? " "
            : "_"
        )
        .join("");
      setMaskedWord(newMaskedWord);

      if (!newMaskedWord.includes("_")) {
        alert(`You win! The word is: ${randomWord.word}`);
        startNewGame();
      }
    }
  }

  function maskWord(wordArray) {
    return wordArray.map((char) => (char === " " ? " " : "_")).join("");
  }

  useEffect(() => {
    if (lives === 0) {
      alert(`You lose! Try again! The word is: ${randomWord.word}`);
      startNewGame();
    }
  }, [lives, startNewGame, randomWord.word]);

  return (
    <div className="w-full h-dvh flex items-center justify-center bg-purple-950 font-chewy">
      <div className="w-full max-w-5xl px-10 flex flex-col items-center ">
        <div className="text-white text-center">
          <p className="text-3xl">Guess the letter!</p>
          <p className="text-5xl mt-10 mb-6 tracking-widest text-amber-400">
            {maskedWord}
          </p>
          <p className="font-manrope text-md mb-6">
            <span className="font-black text-amber-400">Hint:</span>{" "}
            {randomWord.hint}
          </p>
          <Lives lives={lives} />
        </div>
        <TypeLetterForm
          onAddLetter={handleAddLetter}
          randomWord={randomWord.word}
          isWrongLetter={isWrongLetter}
        />
        <div>
          <p className="text-white font-manrope text-sm">Typed letters:</p>
          <TypedLetterList letters={letters} />
        </div>
        <div>
          <button
            onClick={startNewGame}
            className="text-white border-2 rounded-2xl border-amber-400 px-6 py-3 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-purple-950 active:scale-125 transition-all duration-500 ease-in-out"
          >
            Generate new word
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
