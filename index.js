var changeBody = document.getElementById("changeBody");
var guess = document.getElementById("numberInput");
var buttonCheck = document.getElementById("btnCheck");
var attempsId = document.getElementById("attemptsId");
var result = document.getElementById("result");
var answer = document.getElementById("questionNum");
var guessForm = document.getElementById("guessForm") ;

var attempts = 0;

// path name for max numbers
var pathName = window.location.pathname;
console.log(pathName);
var maxNum = 0;
// if (pathName === `/easy.html`) { //will only works when not deployed
//   maxNum = 10;
//   attempts = 10;
// } else if (pathName === `/medium.html`) {
//   maxNum = 40;
//   attempts = 5;
// } else if (pathName === `/hard.html`) {
//   maxNum = 100;
//   attempts = 3;
// } else {
//   console.log(`error`);
// }

if (pathName.includes("easy")) {
  maxNum = 10;
  attempts = 10;
} else if (pathName.includes("medium")) {
  maxNum = 40;
  attempts = 5;
} else if (pathName.includes("hard")){
  maxNum = 100;
  attempts = 3;
} else {
  console.log(`error`);
}
var randomNum = Math.floor(Math.random() * maxNum) + 1;
console.log(randomNum);

// logic

guess.addEventListener("focus", function () {
  guess.style.outline = "2px solid green";
});

guess.addEventListener("blur", function () {
  guess.style.outline = "1px solid grey";
});

guessForm.addEventListener("submit", function (e) {
  e.preventDefault() ;
  var value = guess.value;
  if (value === "") {
    alert("Please enter your guess");
    guess.style.outline = "1px solid red";
  } else {
    if (attempts < 1) {
      result.innerText = "You lose";
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      document.body.style.fontWeight = "700";
      answer.innerText = `${randomNum}`;
    } else {
      attempts--;
      attempsId.innerText = `Remaing Attempts: ${attempts}`;

      if (value == randomNum) {
        result.innerText = `Congratulations You Won`;
        result.style.color = `Green`;
        result.style.fontSize = `25px`;
        answer.innerText = `${value}`;
        attempts = 0;
        guess.disabled = true;
        buttonCheck.disabled = true;
        attempsId.innerText = `Remaing Attempts: ${attempts}`;
        changeBody.style.background =
          "url('https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif')";
        changeBody.style.backgroundSize = "cover";
        changeBody.style.backgroundPosition = "center center";
        changeBody.style.backgroundRepeat = "no-repeat";
      } else {
        result.innerText = `Oops Try Again`;
        guess.value = "";
      }
    }
  }
});
