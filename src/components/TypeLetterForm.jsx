import { useState } from "react";

export default function TypeLetterForm ({onAddLetter}) {
    const [enteredLetter, setEnteredLetter] = useState('')
    
    function handleSubmit (event){
        event.preventDefault();

        onAddLetter(enteredLetter);
        setEnteredLetter(''); 
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Guess the letter!</label>
                <input
                    type="text"
                    value={enteredLetter}
                    onChange={(event) => setEnteredLetter(event.target.value)}
                />
            </p>
            <p>
                <button type="submit">OK</button>
            </p>
        </form>
    )   
}