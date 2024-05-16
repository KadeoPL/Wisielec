import { useRef } from "react";

export default function TypeLetterForm () {
    const letter = useRef();
    
    function handleSubmit (event){
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Guess the letter!</label>
                <input type="text" ref={letter}/>
            </p>
            <p>
                <button>OK</button>
            </p>
        </form>
    )   
}