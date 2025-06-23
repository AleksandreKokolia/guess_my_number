const sicretNumberEL = document.querySelector(".sicret_number");
const guessEl = document.querySelector(".guess");
const checkEl = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreNumberEl = document.querySelector(".score_number");
const highScoreNumberEl = document.querySelector(".high_scoreNumber");
let sicretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(sicretNumber);
let bodyEl = document.querySelector("body");
const againEl = document.querySelector(".again");
console.log(againEl);
let scoreNumber = 20;
let highScoreNumber = 0;
const guessNumberSectionEl = document.querySelector(".guess_number_section");
const popUpEl = document.querySelector(".overlay");

checkEl.addEventListener("click", () => {
  let guess = Number(guessEl.value);
  if (guess < 1) {
    messageEl.textContent = "wrong number";
    scoreNumber--;
    scoreNumberEl.textContent = scoreNumber;
  } else if (guess > 20) {
    messageEl.textContent = "wrong number";
    scoreNumber--;
    scoreNumberEl.textContent = scoreNumber;
  } else if (guess > sicretNumber) {
    messageEl.textContent = "sicret number is lower ";
    scoreNumber--;
    scoreNumberEl.textContent = scoreNumber;
  } else if (guess < sicretNumber) {
    scoreNumber--;
    scoreNumberEl.textContent = scoreNumber;
    messageEl.textContent = "sicret number is hier ";
  } else if (guess === sicretNumber) {
    messageEl.textContent = "you win";
    bodyEl.style.backgroundColor = "#60b347";
    sicretNumberEL.textContent = sicretNumber;
    console.log(scoreNumber);
    // checkEl.style.opacity = "0";
    // checkEl.style.cursor = "none";
    if (highScoreNumber < scoreNumber) {
      highScoreNumberEl.textContent = scoreNumber;
      highScoreNumber = scoreNumber;
    }
  }
  if (scoreNumber < 1) {
    messageEl.textContent = "Sicret Number Was... ";
    bodyEl.style.backgroundColor = "#c92a2a";
    sicretNumberEL.textContent = sicretNumber;
    scoreNumberEl.textContent = 0;
  }
  guessEl.value = "";
});
againEl.addEventListener("click", () => {
  sicretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(sicretNumber);
  sicretNumberEL.textContent = "?";
  messageEl.textContent = "Start guessing...";
  bodyEl.style.backgroundColor = "#333";
  guessEl.textContent = "";
  scoreNumber = 20;
  scoreNumberEl.textContent = scoreNumber;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(e.key);
    checkEl.click();
  }
});
