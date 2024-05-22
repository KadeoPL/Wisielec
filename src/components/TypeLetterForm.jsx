import { useState, useEffect } from "react";

export default function TypeLetterForm ({onAddLetter, randomWord, clearTypedLetters}) {
    const [enteredLetter, setEnteredLetter] = useState('')
    const [error, setError] = useState('')
    const [typedLetterArray, setTypedLetterArray] = useState([]);

    useEffect(() => {
        setTypedLetterArray([]);
    }, [randomWord]);
    
    function handleSubmit (event){
        event.preventDefault();
        
        if (/^[A-Z]$/.test(enteredLetter)) {
            
            if (typedLetterArray.includes(enteredLetter)) {
                setError('The letter has already been entered');
                return;
            }
            setTypedLetterArray(prevTypedLetters => [...prevTypedLetters, enteredLetter]);
            onAddLetter(enteredLetter);
            setEnteredLetter('');
            setError('');

          } else if(enteredLetter.length === 0){
            setError('The field cannot be empty');
          } else if (enteredLetter.length > 1){
            setError('Only a single letter is allowed');
          }else {
            setError('The character you enter must be a letter');
          }
        }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={enteredLetter}
                    onChange={(event) => setEnteredLetter(event.target.value.toUpperCase())}
                    maxLength={1}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">OK</button>
            </form>
        </div>
    )   
}