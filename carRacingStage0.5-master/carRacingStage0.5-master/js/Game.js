class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      
    }

    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)

    car1.addImage("somethingRude",cari1)
    car2.addImage("somethingRudeOp",cari2)
    car3.addImage("somethingRudeLol",cari3)
    car4.addImage("somethingRudeSuckz",cari4)


    carz = [car1,car2,car3,car4]

  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    player.getRank()
    Player.getPlayerInfo();

    if(playerz !== undefined){
      background(255)
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      let index = 0
      let x = 300
      let y
      for(var plr in playerz){
        
        index += 1

        x+=250

        y = displayHeight - playerz[plr].distance

        carz[index-1].x = x 
        carz[index-1].y = y

        for(var i = playerCount ; i==4 ; i++){
          fill("red")
          text(player.name,x,y-50)
        }


        if (index === player.index) {
          ellipse(x,y,100,50);

          camera.position.x = displayWidth/2
          camera.position.y = carz[index - 1].y
        }


      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 10
      player.update();
    }

    if(player.distance >5200){
      gameState = 2
      player.rank += 1 ; 
      Player.UpdateRanka(player.rank);
    }

    drawSprites()
      //Hello Dummies
  }

  end(){
    console.log(player.rank)
  }
}
