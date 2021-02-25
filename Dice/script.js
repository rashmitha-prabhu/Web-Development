var m = Math.floor((Math.random()*5)+1);
var n = Math.floor((Math.random()*5)+1);

var img1 = "images/dice"+m+".png";
var img2 = "images/dice"+n+".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

var win = document.querySelector(".container h1");

if(m>n){
    win.innerHTML = "Player 1 Wins!";
}
else if(m<n){
    win.innerHTML = "Player 2 Wins!";
}
else{
    win.innerHTML = "Draw";
}