var randomNumber1= Math.floor(Math.random()*6) +1;
var randomImage = "/images/dice" + randomNumber1 +".png";
var image= document.querySelectorAll("img")[0];
image.setAttribute("src" , randomImage)



var randomNumber2= Math.floor(Math.random()*6) +1;
var randomImage = "/images/dice" + randomNumber2 +".png";
var image= document.querySelectorAll("img")[1];
image.setAttribute("src" , randomImage)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Play1 Wins🚩"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Play2 Wins🚩"

}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw🚩"
}