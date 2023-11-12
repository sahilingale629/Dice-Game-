var randomNumber1 = Math.floor(Math.random() * 6 + 1);

name1 = "dice" + randomNumber1 + ".png";
var sor1 = "images/" + name1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", sor1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var name2 = "dice" + randomNumber2 + ".png";
var sor2 = "images/" + name2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", sor2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player One Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player Two Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
