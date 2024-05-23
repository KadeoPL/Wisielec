import { useState, useEffect } from "react";
import 'animate.css';

export default function TypeLetterForm ({onAddLetter, randomWord}) {
    const [enteredLetter, setEnteredLetter] = useState('')
    const [error, setError] = useState('')
    const [typedLetterArray, setTypedLetterArray] = useState([]);
    const [inputClass, setInputClass] = useState('');

    useEffect(() => {
        setTypedLetterArray([]);
    }, [randomWord]);
    
    function handleSubmit (event){
        event.preventDefault();
        
        if (/^[A-Z]$/.test(enteredLetter)) {
            
            if (typedLetterArray.includes(enteredLetter)) {
                setError('The letter has already been entered');
                setShakeAnimation();
                return;
            }
            setTypedLetterArray(prevTypedLetters => [...prevTypedLetters, enteredLetter]);
            onAddLetter(enteredLetter);
            setEnteredLetter('');
            setError('');

          } else if(enteredLetter.length === 0){
            setError('The field cannot be empty');
            setShakeAnimation();
          } else if (enteredLetter.length > 1){
            setError('Only a single letter is allowed');
            setShakeAnimation();
          }else {
            setError('The character you enter must be a letter');
            setShakeAnimation();
          }
        }
    
    function setShakeAnimation() {
        setInputClass('animate__animated animate__shakeX');
        setTimeout(() => {
            setInputClass('');
            }, 1000);
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