var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var name = "dice" + randomNumber1 + ".png";
var sor = "./images/" + name;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", sor);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var name = "dice" + randomNumber2 + ".png";
var sor = "./images/" + name;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", sor);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player One Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player Two Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
alert("working");
