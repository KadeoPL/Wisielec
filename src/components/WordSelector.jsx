const wordsArray = [
  { word: "Elephant", hint: "The largest land animal" },
  { word: "Penguin", hint: "A flightless bird that swims" },
  { word: "Kangaroo", hint: "An animal that carries babies in a pouch" },
  { word: "Giraffe", hint: "The tallest animal" },
  { word: "Crocodile", hint: "A large reptile found in rivers" },
  { word: "Owl", hint: "A nocturnal bird with excellent vision" },
  { word: "Dolphin", hint: "An intelligent marine mammal" },
  { word: "Chameleon", hint: "A lizard that changes color" },
  { word: "Wolf", hint: "A wild ancestor of the domestic dog" },
  { word: "Turtle", hint: "A reptile with a hard shell" },
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  const randomWord = { ...wordsArray[randomIndex] };
  randomWord.word = randomWord.word.toUpperCase();
  return randomWord;
}
