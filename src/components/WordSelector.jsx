    export const wordsArray = [
        {word: 'Computer', category: 'Information technology'},
        {word: 'Phone', category: 'Phone technology'},
        {word: 'Keyboard', category: 'Information technology'},
        {word: 'Mouse', category: 'Information technology'}
    ];

    const randomIndex = Math.floor(Math.random() * wordsArray.length);

    export function getRandomWord(){
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        return wordsArray[randomIndex];
    }
