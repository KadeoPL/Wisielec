export default function WordSelector(){
    
    const wordsArray = [
        {word: 'Computer', category: 'Information technology'},
        {word: 'Phone', category: 'Phone technology'}
    ];

    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    const randomWord = wordsArray[randomIndex];

    return (
        <div>
            <p>{randomWord.word}</p>
            <p>{randomWord.category}</p>
        </div>
    )
}