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
    }

    play(){
      form.hide();
       Player.getAllPlayerInfo();
       
    }
}

