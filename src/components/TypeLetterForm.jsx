import { useState, useEffect } from "react";

export default function TypeLetterForm({
  onAddLetter,
  randomWord,
  isWrongLetter,
}) {
  const [enteredLetter, setEnteredLetter] = useState("");
  const [error, setError] = useState("");
  const [typedLetterArray, setTypedLetterArray] = useState([]);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setTypedLetterArray([]);
  }, [randomWord]);

  function setShakeAnimation() {
    setAnimation("animate__animated animate__shakeX");
    setTimeout(() => {
      setAnimation("");
    }, 1000);
  }

  function handleSubmit(event) {
    "";
    event.preventDefault();

    if (/^[A-Z]$/.test(enteredLetter)) {
      if (typedLetterArray.includes(enteredLetter)) {
        setError("The letter has already been entered");
        setShakeAnimation();
        return;
      }
      setTypedLetterArray((prevTypedLetters) => [
        ...prevTypedLetters,
        enteredLetter,
      ]);
      onAddLetter(enteredLetter);
      setEnteredLetter("");
      setError("");
    } else if (enteredLetter.length === 0) {
      setError("The field cannot be empty");
      setShakeAnimation();
    } else if (enteredLetter.length > 1) {
      setError("Only a single letter is allowed");
      setShakeAnimation();
    } else {
      setError("The character you enter must be a letter");
      setShakeAnimation();
    }
  }

  return (
    <div className="my-10">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            value={enteredLetter}
            onChange={(event) =>
              setEnteredLetter(event.target.value.toUpperCase())
            }
            maxLength={1}
            className={`${animation} border-2 border-amber-400 rounded-2xl text-4xl text-center w-[120px] h-[80px] text-white`}
          />
          <button
            type="submit"
            className="bg-amber-400 px-6 py-3 rounded-2xl text-2xl text-purple-950 hover:scale-105 active:scale-125 transition-all duration-200 ease-in-out cursor-pointer"
          >
            Ok
          </button>
        </form>
      </div>
      {error && (
        <p className={`${animation} text-center text-red-300 mt-4`}>{error}</p>
      )}
    </div>
  );
}
