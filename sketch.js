var logoImg,form;
var game;
var database;
var gameState=0;
var player;
var playerCount=0;
var allPlayer;
var team1Img;
var team2Img;
var playBgImg
var box1Img;
var box2Img;
var brickImg;
var team1Img;
var team2Img;
var brick2,brick3,brick,brick4,brick5,brick6
var player1,player2,player3,player4,player5,player6
var obs,obs2
var obsImg
var playBg
var brick2Img;
var obstacle;
var obstacleImg;

function preload(){
logoImg=loadImage("image/bg2.jpg");
team1Img=loadImage("image/team1.PNG")
team2Img=loadImage("image/team2.PNG")
playBgImg=loadImage("image/bg.jpg");
box1Img=loadImage("image/box1.PNG");
box2Img=loadImage("image/box2.PNG");
brickImg=loadImage("image/brick1.PNG");
//team1Img=loadImage("image/team1.PNG");
brick2Img=loadImage("image/brick2.PNG");
team2Img=loadImage("image/team2.PNG");
playBg=loadImage("image/M1.jpg")
obsImg=loadImage("image/obs.PNG");
obstacleImg=loadImage("image/obst.png");

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
//0console.log(displayHeight)
//console.log(displayWidth);

if(playerCount===6){
    gameState=1;
    game.updateState(1);
}
if(gameState===1){
    game.play();
}



}