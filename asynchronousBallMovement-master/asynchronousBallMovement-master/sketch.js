let ball , databse , game;

function setup(){
    databse = firebase.database();
    createCanvas(500,500);

    game = new Game();

    game.getStateCount();
    game.Start();

}

function draw(){

    background("white");



}
