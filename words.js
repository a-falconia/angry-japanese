var dict = [
    ["おはようございます", "Ohayou gozaimasu", "good morning"],
    ["こんにちは", "Konnichiwa", "hello"],
    ["こんばんは", "Konbanwa", "good evening"],
    ["おやすみなさい", "Oyasuminasai", "goodnight"],
    ["ありがとうございます", "Arigatou gozaimasu", "thank you"],
    ["すみません", "Sumimasen", "sorry"],
    ["ごめんなさい", "Gomennasai", "sorry"],
    ["はい", "Hai", "yes"],
    ["いいえ", "iie", "no"]
];
const quizKana = document.querySelector("#kana");
const quizRomaji = document.querySelector("#romaji");

const card = document.querySelector("#flashcard");
const ansForm = document.querySelector("#ansForm");
const answer = document.querySelector("#answer");
const score = document.querySelector("#score");
const feedback = document.querySelector("#angryFeedback");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Flashcard {
    constructor(kana, romaji, english) {
        this.kana = kana;
        this.romaji = romaji;
        this.english = english;
    }
    constructor(arr) {
        this.kana = arr[0];
        this.romaji = arr[1];
        this.english = arr[2];
    }

}
const getCard = function () {

    var randword = Math.floor(Math.random() * dict.length);
    var randCard = dict[randword];
    quizKana.textContent = randCard[0];
    quizRomaji.textContent = randCard[1];
    return randCard[2]; //TODO: Костыль, реализовать через класс карточки?
}

var ans = getCard(); //TODO: Костыль, реализовать через класс карточки?
var points = 0;

ansForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (answer.value == ans) {

        points += 10;
        await sleep(500);
        feedback.textContent = "ok... for now";
        feedback.style.color = 'green';
    }
    else {

        points = 0;
        await sleep(500);

        feedback.textContent = "Wrong, you idiot";
        feedback.style.color = 'red';

    }
    answer.value = '';
    ans = getCard();
    score.textContent = `Your Score: ${points}`
});