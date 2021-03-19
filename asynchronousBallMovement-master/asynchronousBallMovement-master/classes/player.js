class Player{
    constructor(){}

    getPlayerCount(){
        let cref = databse.ref('playerCount')

        cref.on("value", (data)=>{
            playerCount = data.val();
        });

        
    }

    UpdatePlayerCount(Count){
        databse.ref('/').update({playerCount:Count})
    }

    UpdatePlayerName(){
        let index = "player" + playerCount 

        databse.ref(index).set({
           name:playerName
        })
    }
}