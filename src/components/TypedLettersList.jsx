import TypedLetter from "./TypedLetter.jsx";

export default function TypedLetterList({ letters }) {
  return (
    <div className="flex items-center gap-3 my-4 font-manrope text-xl">
      {letters.map((letter, index) => (
        <>
          {index === 0 ? "" : <span className="text-white">|</span>}
          <TypedLetter
            key={index}
            letter={letter.char}
            isValid={letter.isValid}
          />
        </>
      ))}
    </div>
  );
}
