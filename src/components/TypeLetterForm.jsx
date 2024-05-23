import { useState, useEffect } from "react";

export default function TypeLetterForm ({onAddLetter, randomWord, isWrongLetter}) {
    const [enteredLetter, setEnteredLetter] = useState('')
    const [error, setError] = useState('')
    const [typedLetterArray, setTypedLetterArray] = useState([]);
    const [inputClass, setInputClass] = useState('');

    useEffect(() => {
        setTypedLetterArray([]);
    }, [randomWord]);

    /*useEffect(() => {
        if (inputClass) {
            const timeout = setTimeout(() => setInputClass(''), 5000);
            return () => clearTimeout(timeout);
        }
    }, [inputClass]);*/

    useEffect(() => {
        if (isWrongLetter) {
            setShakeAnimation();
        }
    }, [isWrongLetter]);

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
    function setShakeAnimation() {
        setInputClass('animate__animated animate__shakeX');
    }

    return (
        <div className="enter-letter-section">
            <div className="form">
                <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        value={enteredLetter}
                        onChange={(event) => setEnteredLetter(event.target.value.toUpperCase())}
                        maxLength={1}
                        className={inputClass}
                    />
                </form>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>    
    )   
}