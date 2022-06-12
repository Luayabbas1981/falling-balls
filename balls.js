const h1 = document.createElement("h1");
h1.textContent = "Falling Balls";
const main = document.createElement("section");
main.className = "main";
document.body.appendChild(main);
const sectionOne = document.createElement("section");
sectionOne.className = "sectionOne";
main.append(sectionOne);
const speedDiv = document.createElement("div");
speedDiv.classList.add("speedDiv");
const startGame = document.createElement("button");
startGame.classList.add("startGame");
startGame.textContent = "Start the Game";
const fremdBall = document.createElement("div");
fremdBall.classList.add("fremdBall", "speedDivChild");
fremdBall.textContent = "You missed :";
const fremdBallNum = document.createElement("div");
fremdBallNum.classList.add("fremdBallNum", "speedDivChild");
const mistakes = document.createElement("div");
mistakes.classList.add("mistakes", "speedDivChild");
mistakes.textContent = "green balls";
/* const mistakesNum = document.createElement("div");
mistakesNum.classList.add("mistakesNum" ,"speedDivChild");
const arrowUp = document.createElement("div");
arrowUp.classList.add("arrowUp" ,"speedDivChild");
const arrowDown = document.createElement("div");
arrowDown.classList.add("arrowDown" ,"speedDivChild"); */
/* const resualtNum = document.createElement("div");
resualtNum.classList.add("resualtNum" ,"speedDivChild"); */
const tryAgain = document.createElement("button");
tryAgain.classList.add("tryAgain", "speedDivChild");
tryAgain.textContent = "Try again";
sectionOne.append(startGame, fremdBall, fremdBallNum, mistakes, tryAgain);
const speedDivChildren = document.querySelectorAll(".speedDivChild");
speedDivChildren.forEach((e) => (e.style.margin = "5%"));
const sectionTwo = document.createElement("section");
main.appendChild(sectionTwo);
sectionTwo.className = "sectionTwo";
const ballsDiv = document.createElement("div");
ballsDiv.classList.add("ballsDiv");
sectionTwo.append(h1, ballsDiv);

startGame.addEventListener("click", () =>
  ballsDiv.children[0].classList.add("ballColumn")
);
startGame.addEventListener("click", () =>
  ballsDiv.children[1].classList.add("ballColumn")
);
startGame.addEventListener("click", () =>
  ballsDiv.children[2].classList.add("ballColumn")
);
startGame.addEventListener("click", () =>
  ballsDiv.children[3].classList.add("ballColumn")
);

for (i = 0; i < 4; i++) {
  const ballColumn = document.createElement("div");
  ballsDiv.appendChild(ballColumn);
  for (x = 0; x < 150; x++) {
    startGame.addEventListener("click",()=> ball.style.display="block")
    const ball = document.createElement("div");
    ball.classList.add(`ball`);
    ball.style = `margin-top:calc(${Math.floor(Math.random() * 10)}% * ${
      x / 8
    })`;
    ballColumn.appendChild(ball);
  }
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

for (x = 0; x < 4; x++) {
  for (j = 0; j < 40; j++) {
    let randomNum = generateRandomInteger(149);
    sectionTwo.children[1].children[x].children[
      randomNum
    ].style.backgroundColor = "#65d16a";
    sectionTwo.children[1].children[x].children[randomNum].classList.add(
      "green"
    );
  }
}

const balls = document.querySelectorAll(".green");
num = balls.length;
fremdBallNum.textContent = num;

balls.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = "red";
  });
  e.addEventListener("click", () => {
    e.classList.replace("green", "red");
    num1--;
    console.log(num1);
    fremdBallNum.innerHTML = num1;
  });
});
const redBalls = document.querySelectorAll(".red");
num1 = num - redBalls.length;
tryAgain.addEventListener("click", () => window.location.reload(true));
