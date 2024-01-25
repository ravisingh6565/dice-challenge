// alert("java script is works");
 document.querySelector("h1").innerHTML="Welcome Ravi Singh";
var dice1= Math.floor(Math.random()*6 +1);
var dice2= Math.floor(Math.random()*6 +1);
{/* <img src="images\dice1.png"></img> */}
// var img1path= "images\dice "+dice1+".png";
// var img1path= "images\dice "+dice2+".png";
// document.write("YOur generater\d number is : "+dice);
if( dice1>dice2){

    document.querySelector("h1").innerHTML="💥💥💥player 1 is winner!!";
    document.getElementById("dice1").src="images/dice"+dice1+".png";
    document.getElementById("dice2").src="images/dice"+dice2+".png";
}
if(dice2>dice1){
    document.querySelector("h1").innerHTML="player 2 is winner 💥💥💥!!";
    document.getElementById("dice2").src="images/dice"+dice2+".png";
    document.getElementById("dice1").src="images/dice"+dice1+".png";
}
if(dice1===dice2){
    document.querySelector("h1").innerHTML="match tied (both player got same points)!!";
    document.getElementById("dice1").src="images/dice"+dice1+".png";
    document.getElementById("dice2").src="images/dice"+dice2+".png";
}