class Form{
    constructor(){}

    display(){
        let input = createInput("")

        input.position(250,250);

        let buton = createButton("hi I am a button")

        buton.position(420,250)

        buton.mousePressed(()=>{
            input.hide();
            buton.hide();
            
            let playerName=input.value();

            playerCount+=1;

            player.UpdatePlayerName(playerName)

            player.UpdatePlayerCount(playerCount)

            let greet = createElement('h2')

            greet.html("hi dummy" + " " + playerName)

            greet.position(250,200)
        })

        
    }
}
