console.log("hi!!")

var dict = [
    ["おはようございます", "Ohayou gozaimasu", "good morning"],
    ["こんにちは", "Konnichiwa", "hello"],
    ["こんばんは", "Konbanwa", "good evening"],
    ["おやすみなさい", "Oyasuminasai", "goodnight"],
    ["ありがとうございます", "Arigatou gozaimasu", "thank you"],
    ["すみません", "Sumimasen", "sorry"],
    ["ごめんなさい", "Gomennasai", "sorry"],
    ["はい", "Hai", "yes"],
    ["いいえ", "Iie", "no"]
]

var randword = Math.floor(Math.random() * dict.length);
var randCard = dict[randword];
console.log(randword);
console.log(randCard);

const quizKana = document.querySelector("#kana");
const quizRomaji = document.querySelector("#romaji");

quizKana.textContent = randCard[0];
quizRomaji.textContent = randCard[1];