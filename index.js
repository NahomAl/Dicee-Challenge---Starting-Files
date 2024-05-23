var dicee1 = Math.floor(Math.random() * 6)+1;
var dicee2 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + dicee1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + dicee2 + ".png");
if (dicee1 < dicee2) 
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
else if (dicee1 < dicee2)
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
else
    document.querySelector("h1").innerHTML = "Draw!";