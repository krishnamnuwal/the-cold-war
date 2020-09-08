class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play")
        this.greet=createElement("h2")
        this.gameName=createElement("h1");
        this.reset=createButton("reset");
        this.message=createElement('h2');
    }
    display(){
        this.input.position(displayWidth/2-400,displayHeight/2);
        this.button.position(displayWidth/2-370,displayHeight/2+50);
        this.gameName.html("THE COLD WAR");
        this.gameName.position(displayWidth/2-210,displayHeight/2-450)
        this.gameName.style('color','grey')
        this.reset.position(displayWidth/2-650,displayHeight/2-350)
        this.reset.style('background','red')
        this.reset.style('height','40px')
        

        
        this.button.mousePressed(()=>{
         this.button.hide();
         this.input.hide();
         player.name=this.input.value();
         playerCount+=1;
         player.index=playerCount
         if(playerCount<=3){
            player.team=1;
        }else{
            player.team=2
        }
     //  console.log(playerCount)
         player.writeName();
         player.updatePlayerCount(playerCount);
        
         this.greet.html("HELLO "+ player.name)
         this.greet.position(displayWidth/2,displayHeight/2);
         background(260);
         this.message.html("<font color='yellow'>WAITING FOR OTHER PLAYERS....PLEASE WAIT </font>")
         this.message.position(displayWidth/2-100,displayHeight/2+50)
        })
        this.reset.mousePressed(()=>{
            player.updatePlayerCount(0);
            location.reload();
        })

    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.gameName.hide();
        this.message.hide();
        this.greet.hide();
    }
    
}