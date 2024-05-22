import TypedLetter from "./TypedLetter.jsx";

export default function TypedLetterList({letters}) {
  return (
    <div>
      {letters.map((letter, index) => (
        <TypedLetter key={index} letter={letter.char} className={letter.className} />
      ))}
    </div>
  );
}
