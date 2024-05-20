    export const wordsArray = [
        {word: 'Computer', category: 'Information technology'},
        {word: 'Phone', category: 'Phone technology'},
        {word: 'Keyboard', category: 'Information technology'},
        {word: 'Mouse', category: 'Information technology'}
    ];

    export function getRandomWord(){
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const randomWord = {... wordsArray[randomIndex]};
        randomWord.word = randomWord.word.toUpperCase();
        return randomWord;
    }
