const answer = document.querySelector(".answer");
const form = document.querySelector(".form-container");
const input = document.querySelector(".form-container input");
const formH2 = document.querySelector(".form-container h2");
const log = document.querySelector(".log-container");

const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answerArr = [];
let coin = 10;
let strike = 0;
let ball = 0;

function makeNewNumber() {
  for (let i = 0; i < 4; i++) {
    answerArr.push(oneToNine.splice(Math.floor(Math.random() * (9 - i)), 1)[0]);
    console.log(answerArr);
  }
}

function compareAnswer() {
  coin--;
  const inputArr = input.value.split("").map((i) => Number(i));
  console.log("i" + inputArr);
  for (let i = 0; i < answerArr.length; i++) {
    if (inputArr[i] === answerArr[i]) {
      strike++;
      if (strike === 4) {
        return 1;
      }
    } else if (inputArr.includes(answerArr[i])) ball++;
  }
  const li = document.createElement("li");
  li.innerText = `
  | ${input.value[0]}, ${input.value[1]}, ${input.value[2]}, ${input.value[3]} | 
  ${strike}스트라이크 ${ball}볼 남은 기회 : ${coin}`;
  log.appendChild(li);
  input.value = "";
  strike = 0;
  ball = 0;
}

function answerIs() {
  answer.innerText = `
    실패! 정답은 ${answerArr[0]}, ${answerArr[1]}, ${answerArr[2]}, ${answerArr[3]}, 이었습니다.
    `;
  const button = document.createElement("button");
  button.innerText = "다시하기";
  log.appendChild(button);
  button.addEventListener("click", () => {
    location.reload();
  });
}

function gotAnswer() {
  answer.innerText = `정답입니다!`;
  const button = document.createElement("button");
  button.innerText = "다시하기";
  log.appendChild(button);
  button.addEventListener("click", () => {
    location.reload();
  });
}

function formSubmit(e) {
  e.preventDefault();
  if (input.value.length === 4 && coin > 0) {
    if (compareAnswer() === 1) {
      gotAnswer();
      coin = 0;
    } else if (coin === 0) answerIs();
  }
}

makeNewNumber();
input.focus();
form.addEventListener("submit", formSubmit);
