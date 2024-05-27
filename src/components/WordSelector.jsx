const wordsArray = [
    {"word": "Computer", "hint": "An electronic device for processing data"},
    {"word": "Phone", "hint": "A communication device"},
    {"word": "Keyboard", "hint": "An input device for typing characters"},
    {"word": "Mouse", "hint": "An input device for pointing and clicking"},
    {"word": "Laptop", "hint": "A portable computer"},
    {"word": "Television", "hint": "An electronic device for watching broadcasts"},
    {"word": "Headphones", "hint": "An audio output device worn on the head"},
    {"word": "Tablet", "hint": "A portable touch-screen device"},
    {"word": "Printer", "hint": "A device for producing hard copies of digital documents"},
    {"word": "Smartwatch", "hint": "A wearable device with computing capabilities"},
    {"word": "Game Console", "hint": "A device for playing video games"},
    {"word": "USB Drive", "hint": "A portable data storage device"},
    {"word": "External Monitor", "hint": "A secondary display device"},
    {"word": "Wi-Fi Router", "hint": "A device that provides wireless internet"},
    {"word": "Graphics Card", "hint": "A hardware component for rendering images"},
    {"word": "Virtual Reality", "hint": "A simulated experience using a headset"},
    {"word": "Hard Drive", "hint": "A device for storing digital data"},
    {"word": "Digital Camera", "hint": "A device for capturing photographs electronically"},
    {"word": "Smart Speaker", "hint": "A voice-activated audio device"},
    {"word": "Memory Card", "hint": "A small storage device for data"}
]


    export function getRandomWord(){
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const randomWord = {... wordsArray[randomIndex]};
        randomWord.word = randomWord.word.toUpperCase();
        return randomWord;
    }
