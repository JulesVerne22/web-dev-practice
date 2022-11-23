
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var text = "Refresh Me";

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if(randomNumber1 > randomNumber2){
    text = "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    text = "Player 2 Wins!";
}

document.querySelector("h1").textContent = text;
