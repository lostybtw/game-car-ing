class Form {
  constructor() {
     this.input = createInput('name');
     this.button = createButton('Play');
     this.reset = createButton('reset')
     this.greeting = createElement('h3');
  }

  hide(){
    this.input.hide();
    this.button.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Player's Unknown Car Ground");
    title.position(displayWidth/2, 20);
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)

      
    });

    this.reset.position(displayWidth-100,20)

    this.reset.mousePressed(()=>
    {
      player.updateCount(0);
      game.update(0);
      //playerz = []
      //player.update()
    })

  }
}
