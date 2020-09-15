class Player{
    constructor(){
        this.name=null;
        this.index=0;
        this.team=null;
        this.positionX=0;
        this.positionY=0;
    }
   writeAll(x,y){
       var playerInfo="players/player"+this.index
        database.ref(playerInfo).set({
         name: this.name,
         team:this.team,
         positionX:this.positionX+x,
         positionY:this.positionY+y,
         
     })
     



   }
   getPlayerCount(){
       database.ref('playerCount').on("value",function(data){
           playerCount=data.val();
       })
       
   }
   updatePlayerCount(count){
       database.ref('/').update({
           playerCount:count
       })
   }
   static getAllPlayerInfo(){
        database.ref('/').on("value",function(data){
            allPlayer=data.val();
        //    console.log(allPlayer)
        })

   }


}