class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play")
        this.greet=createElement("h2")
        this.gameName=createElement("h1");
        this.reset=createButton("reset");
        this.message=createElement('h2');
        this.story=createElement('h4')
        this.str=createElement('h3');
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
    //    text(mouseX+","+mouseX,mouseY)

        
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
         player.writeAll(0,0);
         player.updatePlayerCount(playerCount);
        
         this.greet.html("HELLO "+ player.name)
         this.greet.position(displayWidth/2,displayHeight/2-200);
         background(260);
         this.message.html("<font color='yellow'>WAITING FOR OTHER PLAYERS....PLEASE WAIT </font>")         
         this.message.position(displayWidth/2-100,displayHeight/2-150)
       //  this.story.html("<p><font color='red'>YOU AND YOUR FRIEND ARE ARMY SOLIDER CAME AT THERE AT HOME ON HOLIDAY..YOU ALL ARE GOOD FRIENDS THE PLACE WHERE YOU ALL LEAVE ")
         this.story.html("<p>* You and your friend are army solider came at there at home on holiday . You all are good friends.   The place where u all leave is full of crime and gangsters. You all decided to clear all the mafias of the city. One by one u r going to destroy all GANGSTERS of  your  city.*</p>")
         this.story.position(displayWidth/2-500,displayHeight/2+30)

         this.str.html("<font size=15px><font color='blue'> STORY:-</font>");
         this.str.position(displayWidth/2-450,displayHeight/2-50)
  })
        this.reset.mousePressed(()=>{
            player.updatePlayerCount(0);
            game.updateState(0)
            location.reload();
        })

    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.gameName.hide();
        this.message.hide();
        this.greet.hide();
        this.story.hide();
        this.str.hide();
    }
    
}