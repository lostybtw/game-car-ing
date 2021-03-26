class Player {
  constructor(){
    this.index = null
    this.distance = 0
    this.name = null
    this.rank = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance 
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",function(data){
     playerz = data.val();
    }) 
  }

  getRank(){
    var rankRef = database.ref('rank');
    rankRef.on("value",function(data){
      this.rank = data.val();
    })
  }

  static UpdateRanka(rank){
    database.ref('/').update({
      rank:rank
    })
  }
}
