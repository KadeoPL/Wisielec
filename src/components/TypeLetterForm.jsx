import { useState } from "react";

export default function TypeLetterForm ({onAddLetter}) {
    const [enteredLetter, setEnteredLetter] = useState('')
    const [error, setError] = useState('')
    
    function handleSubmit (event){
        event.preventDefault();
        
        if (/^[a-zA-Z]$/.test(enteredLetter)) {
            onAddLetter(enteredLetter);
            setEnteredLetter('');
            setError('');
          } else if(enteredLetter.length === 0){
            setError('The field cannot be empty');
          } else {
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
                    onChange={(event) => setEnteredLetter(event.target.value)}
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