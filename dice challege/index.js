// // alert("working");
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1 to 6

// var radomDiceImage="dice"+randomNumber1+".png";//dice1.png to dice6.png
// var radomImagesource="images/"+radomDiceImage;//imsges/dice.png to images/dice6.png
// document.querySelectorAll("img")[0]
// .setAttribute("src",radomImagesource);


// var randomNumber2=Math.floor(Math.random()*6)+1;
// var radomImagesource2="images/dice"+randomNumber2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",radomImagesource2);
// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML="play 1 wins!";
// }
// else if(randomNumber2>randomNumber1){
//     document.querySelector("h1").innerHTML="player 2 wins!";
// }
// else{
//     document.querySelector("h1").innerHTML="Draw !";
// }
function sayhello(){
    var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimages="dice"+randomNumber1+".png";
var randomimagessource="images/"+randomdiceimages;
document.querySelectorAll("img")[0].setAttribute("src",randomimagessource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var radomImagesource="images/dice"+randomNumber2+".png";
document.querySelectorAll("img",randomimagessource)[1].setAttribute("src",radomImagesource);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="play  1 wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins !";
}
else{
    document.querySelector("h1").innerHTML="draw !";
}
}

sayhello();
