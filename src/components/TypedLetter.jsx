export default function TypedLetter({ letter, isValid }) {
  return (
    <h1
      className={`${
        isValid ? "text-green-300" : "text-red-500"
      } text-xl font-bold`}
    >
      {letter}
    </h1>
  );
}
