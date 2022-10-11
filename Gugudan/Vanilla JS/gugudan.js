const problem = document.querySelector(".problems-container h2");
const form = document.querySelector(".form-container");
const input = document.querySelector(".form-container input");
const answer = document.querySelector(".answer-container h2");
const scoreH3 = document.querySelector(".score-container h3:first-child");
const wrongScoreH3 = document.querySelector(".score-container h3:last-child");

let numOfAnswer = 0;
let score = 0;
let wrongScore = 0;

function makeProblems() {
  const firstNum = Math.ceil(Math.random() * 9);
  const secondNum = Math.ceil(Math.random() * 9);
  numOfAnswer = firstNum * secondNum;

  renderProblems(firstNum, secondNum);
}

function renderProblems(fir, sec) {
  problem.innerText = `문제 : ${fir} X ${sec} = ?`;
  scoreH3.innerText = `맞힌 문제 개수 : ${score}`;
  wrongScoreH3.innerText = `틀린 문제 개수 : ${wrongScore}`;
}

function checkAnswer() {
  if (Number(input.value) === numOfAnswer) {
    answer.innerText = "정답입니다!";
    input.value = "";
    score++;
  } else {
    answer.innerText = `틀렸습니다! 정답은 ${numOfAnswer}`;
    input.value = "";
    wrongScore++;
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  checkAnswer();
  makeProblems();
}

makeProblems();
form.addEventListener("submit", onSubmitForm);
