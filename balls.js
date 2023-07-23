const h1 = document.createElement("h1");
h1.textContent = "Falling Balls";
const h2 = document.createElement("h1");
h2.innerHTML = "Click on the <span> blue </span> balls";
const main = document.createElement("section");
main.className = "main";
document.body.appendChild(main);
const sectionOne = document.createElement("section");
sectionOne.className = "sectionOne";
main.append(sectionOne);
const btnContainer = document.createElement("div");
const speedDiv = document.createElement("div");
speedDiv.classList.add("speedDiv");
const startGame = document.createElement("button");
startGame.classList.add("startGame");
startGame.textContent = "Start";
const fremdBall = document.createElement("div");
fremdBall.classList.add("fremdBall", "speedDivChild");
fremdBall.textContent = "score";
const fremdBallNum = document.createElement("div");
fremdBallNum.classList.add("fremdBallNum", "speedDivChild");
const remainTimeText = document.createElement("div");
remainTimeText.classList.add("remainTimeText", "speedDivChild");
remainTimeText.textContent = "time";
const remainTime = document.createElement("div");
remainTime.classList.add("remainTime", "speedDivChild");
const tryAgain = document.createElement("button");
tryAgain.classList.add("tryAgain", "speedDivChild");
tryAgain.textContent = "restart";
sectionOne.append(h2, btnContainer);
btnContainer.append(
  startGame,
  remainTimeText,
  remainTime,
  fremdBall,
  fremdBallNum,
  tryAgain
);
const speedDivChildren = document.querySelectorAll(".speedDivChild");
speedDivChildren.forEach((e) => (e.style.margin = "5%"));
const sectionTwo = document.createElement("section");
main.appendChild(sectionTwo);
sectionTwo.className = "sectionTwo";
const ballsDiv = document.createElement("div");
ballsDiv.classList.add("ballsDiv");
sectionTwo.append(h1, ballsDiv);

for (i = 0; i < 4; i++) {
  const ballColumn = document.createElement("div");
  ballColumn.classList.add("ballColumn");
  ballsDiv.appendChild(ballColumn);
  for (x = 0; x < 150; x++) {
    startGame.addEventListener("click", () => (ball.style.display = "block"));
    const ball = document.createElement("div");
    ball.classList.add(`ball`);
    ball.style = `margin-top:calc(${Math.floor(Math.random() * 10)}% * ${
      x / 8
    })`;

    ballColumn.appendChild(ball);
  }
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

for (x = 0; x < 4; x++) {
  for (j = 0; j < 40; j++) {
    let randomNum = generateRandomInteger(148);
    sectionTwo.children[1].children[x].children[
      randomNum
    ].style.backgroundColor = "#03a9f4";
    sectionTwo.children[1].children[x].children[randomNum].classList.add(
      "blue"
    );
  }
}

const balls = document.querySelectorAll(".blue");

let missedNum = 0;
fremdBallNum.textContent = missedNum;
balls.forEach((e) => {
  e.addEventListener("pointerdown", () => {
    e.style.backgroundColor = "#673ab7";
  });
  e.addEventListener("pointerdown", () => {
    e.classList.replace("blue", "red");
    missedNum++;

    fremdBallNum.textContent = missedNum;
  });
});

let time = 140;

startGame.addEventListener("click", () => {
  setInterval(countDown, 1000);
  function countDown() {
    time < 16 ? remainTime.classList.replace("remainTime", "alarm") : "";
    remainTime.textContent = time;
    time--;
    if (time <= 0) time = 0;
  }
});

tryAgain.addEventListener("click", () => window.location.reload(true));
