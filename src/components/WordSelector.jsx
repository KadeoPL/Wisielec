const wordsArray = [
    {word: 'Computer', hint: 'An electronic device for processing data'},
    {word: 'Phone', hint: 'A communication device'},
    {word: 'Keyboard', hint: 'An input device for typing characters'},
    {word: 'Mouse', hint: 'An input device for pointing and clicking'},
    {word: 'Laptop', hint: 'A portable computer'},
    {word: 'Television', hint: 'An electronic device for watching broadcasts'},
    {word: 'Headphones', hint: 'An audio output device worn on the head'},
    {word: 'Tablet', hint: 'A portable touch-screen device'},
    {word: 'Printer', hint: 'A device for producing hard copies of digital documents'},
    {word: 'Smartwatch', hint: 'A wearable device with computing capabilities'}
];

    export function getRandomWord(){
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const randomWord = {... wordsArray[randomIndex]};
        randomWord.word = randomWord.word.toUpperCase();
        return randomWord;
    }
