import { useState } from "react";
import { checkLetterInWord } from "./checkLetterInWord";

export default function TypeLetterForm ({onAddLetter, randomWord}) {
    const [enteredLetter, setEnteredLetter] = useState('')
    const [error, setError] = useState('')
    const [typedLetterArray, setTypedLetterArray] = useState([]);
    
    function handleSubmit (event){
        event.preventDefault();
        
        if (/^[A-Z]$/.test(enteredLetter)) {
            
            if (typedLetterArray.includes(enteredLetter)) {
                setError('The letter has already been entered');
                return;
            }
            setTypedLetterArray([...typedLetterArray, enteredLetter]);
            onAddLetter(enteredLetter);
            setEnteredLetter('');
            setError('');
            checkLetterInWord(randomWord, enteredLetter)

          } else if(enteredLetter.length === 0){
            setError('The field cannot be empty');
          } else if (enteredLetter.length > 1){
            setError('Only a single letter is allowed');
          }else {
            setError('The character you enter must be a letter');
          }
        }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Guess the letter!</label>
                <input
                    type="text"
                    value={enteredLetter}
                    onChange={(event) => setEnteredLetter(event.target.value.toUpperCase())}
                    maxLength={1}
                />
            </p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>
                <button type="submit">OK</button>
            </p>
        </form>
    )   
}