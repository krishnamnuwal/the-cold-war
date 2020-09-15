class Game{
    constructor(){

    }
getState(){
  //  database.ref('gameState');
    database.ref('gameState').on("value",function(data){
        gameState = data.val();
     })
    } 
      
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    updateAll(){


    }

    async start(){
     //   image(logoImg,displayWidth/2-200,displayHeight/2-200);
     background(logoImg)
        if(gameState===0){
            player=new Player();
            var playerInfoRef= await   database.ref('playerCount').once("value");
            if(playerInfoRef.exists()){
                playerCount=playerInfoRef.val();
                

            }
            form=new Form();
            form.display();
         
            

        }
      
   
        for(var i=90;i<300;i=i+50){
         brick=createSprite(i,displayHeight/2+180,100,10)
            brick.addImage(brickImg);
            brick.scale=0.4
        }
      for(var i=609;i<690;i=i+20){
         brick2=createSprite(85,i,100,10);
        brick2.addImage(brickImg);
        brick2.scale=0.35
      }
      brick3=createSprite(295,displayHeight/2+225,100,10);
      brick3.addImage(brickImg);
      brick3.scale=0.35

     /* for(var i=140;i<280;i=i+50){
           player1=createSprite(i,680,50,50);
          player1.addImage(team1Img);
          player1.scale=0.6
          
      }*/

         player1=createSprite(displayWidth/2-550,680,50,50)
         player1.addImage(team1Img);
         player1.writeAll(player1.x,player1.y)
         player1.scale=0.6

        player2=createSprite(displayWidth/2-500,680,50,50)
        player2.addImage(team1Img)
         player2.scale=0.6

        player3=createSprite(displayWidth/2-450,680,50,50)
        player3.addImage(team1Img)
         player3.scale=0.6

        for(var i=1550;i>1340;i=i-50){
            brick4=createSprite(i,displayHeight/2+180,100,10);
            brick4.addImage(brick2Img);
            brick4.scale=0.4
        }
        for(var i=614;i<690;i=i+20){
            brick5=createSprite(1555,i,100,10);
            brick5.addImage(brick2Img);
            brick5.scale=0.35;
        }
        brick6=createSprite(1348,611,100,10);
        brick6.addImage(brick2Img);
        brick6.scale=0.35


        player4= createSprite(displayWidth/2+730,680,50,50);
        player4.addImage(team2Img);
        player4.scale=0.6

        player5=createSprite(displayWidth/2+770,680,50,50)
        player5.addImage(team2Img);
        player5.scale=0.6

       player6=createSprite(displayWidth/2+820,680,50,50);
        player6.addImage(team2Img);
        player6.scale=0.6

        for(var i=180;i<695;i=i+57){
        obs=createSprite(displayWidth/2-220,i,100,50)
        obs.addImage(obsImg)
        obs.scale=1.8
        }
        for(var i=180;i<695;i=i+57){
            obs2=createSprite(displayWidth/2+500,i,100,50)
            obs2.addImage(obsImg)
            obs2.scale=1.8
        }
        obstacle=createSprite(displayWidth/2+100,200,100,15);
        obstacle.addImage(obstacleImg);
        obstacle.scale=0.9

        

















    }
    

    play(){
      form.hide();
       Player.getAllPlayerInfo();

if(allPlayer!==undefined){
    var index=0;
   // var x=
       for(var plr in allPlayer){

      background(playBg);
      /*  image(box1Img,displayWidth/2-400,displayHeight/2-300);
        image(box2Img,displayWidth/2+400,displayHeight/2+300)*/
      



       // var index=0;

           index=index+1;

          
       }
    }

    drawSprites();
    }
}

