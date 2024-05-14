import { useState } from "react"
import Letter from "./components/letter"

function App() {
  const typedLetter = useState(letters, setLetter);

  function handelAddLetter (){
    setLetter(prevLetter => {
      
    })
  }
  return (
    <>
      <Letter letter="P"></Letter>
    </>
  )
}

export default App
