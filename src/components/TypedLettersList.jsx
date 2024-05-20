import TypedLetter from "./TypedLetter.jsx"

export default function TypedLetterList({letters}) {
    return (
        <div className="typed_letter">
        {letters.map((letter, index) => (
          <TypedLetter key={index} letter={letter}></TypedLetter>
        ))}
      </div>
    )
}