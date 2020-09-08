class Player{
    constructor(){
        this.name=null;
        this.index=0;
        this.team=null;
    }
   writeName(){
       var playerInfo="players/player"+this.index
        database.ref(playerInfo).set({
         name: this.name,
         team:this.team
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
            console.log(allPlayer)
        })

   }


}