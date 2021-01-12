
class Flashcard {

    constructor(arr) {
        this.kana = arr[0];
        this.romaji = arr[1];
        this.english = arr[2];
    }

}

var dict = [
    // new Flashcard(["おはようございます", "Ohayou gozaimasu", "good morning"]),
    // new Flashcard(["こんばんは", "Konbanwa", "good evening"]),
    // new Flashcard(["こんにちは", "Konnichiwa", "hello"]),
    // new Flashcard(["おやすみなさい", "Oyasuminasai", "goodnight"]),
    // new Flashcard(["ありがとうございます", "Arigatou gozaimasu", "thank you"]),
    // new Flashcard(["すみません", "Sumimasen", "sorry"]),
    new Flashcard(["ごめんなさい", "Gomennasai", "sorry"]),
    new Flashcard(["はい", "Hai", "yes"]),
    new Flashcard(["いいえ", "iie", "no"]),
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

const getCard = function () {

    var randword = Math.floor(Math.random() * dict.length);
    var randCard = dict[randword];
    quizKana.textContent = randCard.kana;
    quizRomaji.textContent = randCard.romaji;
    return randCard;
}

var flashcard = getCard();
var points = 0;

ansForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (answer.value == flashcard.english) {

        points += 10;
        await sleep(500);
        feedback.textContent = "ok... for now";
        feedback.style.color = 'green';
        dict.splice(dict.indexOf(flashcard), 1);
        console.log(dict)
    }
    else {

        points = 0;
        await sleep(500);
        feedback.textContent = "Wrong, you idiot";
        feedback.style.color = 'red';
        console.log(dict);
    }
    answer.value = '';
    score.textContent = `Your Score: ${points}`;
    if (dict.length !== 0) { flashcard = getCard(); }
    else {
        quizKana.textContent = "А всё а больше нету карточек";
        quizRomaji.textContent = '';
    } //Getting new card

});