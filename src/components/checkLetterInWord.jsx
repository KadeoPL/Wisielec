export function checkLetterInWord (word, letter) {
    for (let char of word) {
        if (char === letter) {
            console.log('The letter is in word.')
        } else {
            console.log("The letter doesn't seem to be in the word")
        }
    }
}