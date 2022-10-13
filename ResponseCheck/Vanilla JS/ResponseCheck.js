const screen = document.querySelector("#screen");
const result = document.querySelector(".result");
const button = document.querySelector("button");
let state = "wait";
let timeout = null;
let startTime = 0;
let endTime = 0;

function onReset() {
  state = "wait";
  screen.innerText = "클릭해서 시작하세요";
  result.innerText = "시간 : ms";
  screen.className = "wait";
  clearTimeout(timeout);
}

function onClickScreen() {
  if (state === "wait") {
    state = "ready";
    screen.innerText = "초록색이 되면 클릭하세요";
    screen.className = "ready";
    timeout = setTimeout(() => {
      state = "now";
      screen.innerText = "지금 클릭하세요!";
      startTime = new Date();
      screen.className = "now";
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (state === "ready") {
    clearTimeout(timeout);
    state = "wait";
    screen.innerText = "너무 성급했어요 다시시작!";
    screen.className = "wait";
  } else if (state === "now") {
    clearTimeout(timeout);
    endTime = new Date();
    state = "wait";
    screen.innerText = "클릭해서 시작하세요";
    result.innerText = `시간 : ${endTime - startTime}ms`;
    screen.className = "wait";
  }
}

screen.addEventListener("click", onClickScreen);
button.addEventListener("click", onReset);
