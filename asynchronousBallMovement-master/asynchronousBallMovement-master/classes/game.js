class Game{
    constructor(){}

    getStateCount(){
        let gref = databse.ref('gamestate')

        gref.on("value", (data)=>{
            gamestate = data.val();
        });

        
    }

    UpdateGameCount(state){
        databse.ref('/').update({gamestate:state})
    }

    Start(){
        if(gamestate == 0){
            player = new Player()
            player.getPlayerCount()

            form = new Form()
            form.display();
        }
    }
}