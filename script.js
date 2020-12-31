
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('img.img1').setAttribute('src', "images/dice" + randomNumber1 + ".png");
document.querySelector('img.img2').setAttribute('src', "images/dice" + randomNumber2 + ".png");

let message = "";
if (randomNumber1 > randomNumber2) {
  message = "🚩 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  message = "Player 2 wins 🚩";
} else {
  message = "Draw";
}

document.querySelector('h2').innerHTML = message;
