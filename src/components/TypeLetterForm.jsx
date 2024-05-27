import { useState, useEffect } from "react";

export default function TypeLetterForm ({onAddLetter, randomWord, isWrongLetter}) {
    const [enteredLetter, setEnteredLetter] = useState('')
    const [error, setError] = useState('')
    const [typedLetterArray, setTypedLetterArray] = useState([]);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setTypedLetterArray([]);
    }, [randomWord]);

    function setShakeAnimation(){
        setAnimation('animate__animated animate__shakeX');
        setTimeout(() => {
            setAnimation('');
        }, 1000);
    }

    function handleSubmit (event){''
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

    return (
        <div className="enter-letter-section">
            <div className="form">
                <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        value={enteredLetter}
                        onChange={(event) => setEnteredLetter(event.target.value.toUpperCase())}
                        maxLength={1}
                        className={animation}
                    />
                </form>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>    
    )   
}