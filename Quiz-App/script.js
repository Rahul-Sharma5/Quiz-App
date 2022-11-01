const quizDB = [
    {
        question: "Q1: What is the full form of HTML",
        a: "Hello To My land",
        b: "Hey Text markup Language",
        c: "HyperText Markup Language",
        d: "HyperText Makeup Language",
        ans: "ans3"
    },
    {
        question: "Q2: How is document type initialized in HTML5.?",
        a: "</DOCTYPE HTML>",
        b: "</DOCTYPE>",
        c: "<!DOCTYPE HTML>",
        d: "</DOCTYPE html>",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following HTML Elements is used for making any text bold ?",
        a: "<p>",
        b: "<i>",
        c: "<li>",
        d: "<b>",
        ans: "ans4"
    },
    {
        question: "Q4: How many heading tags are there in HTML5?",
        a: "2",
        b: "3",
        c: "5",
        d: "6",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })

    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked= false );
}

submit.addEventListener('click', () =>{
    const CheckAnswer = getCheckAnswer();
    console.log(CheckAnswer);

    if(CheckAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
         loadQuestion();
    }else{

        showScore.innerHTML = `
          <h3> You scored ${score}/${quizDB.length} </h3>
          <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');

    }
});