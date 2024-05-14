import { useState } from "react"
import Letter from "./components/letter"

function App() {
  const typedLetter = useState(letters, setLetter);

  return (
    <>
      <Letter letter={letters}></Letter>
      <button onClick={setLetter}>Ok</button>
    </>
  )
}

export default App
