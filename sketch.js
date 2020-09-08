var logoImg,form;
var game;
var database;
var gameState=0;
var player;
var playerCount=0;
var allPlayer;
function preload(){
logoImg=loadImage("image/bg2.jpg");

}

function setup(){

createCanvas(windowWidth,windowHeight);
database=firebase.database();
game=new Game();
game.start();

}

function draw(){
//background(logoImg);

//game.display();
if(playerCount===6){
    gameState=1;
    game.updateState(1);
}
if(gameState===1){
    game.play();
}



}