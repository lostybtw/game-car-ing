var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

let playerz

let car1,car2,car3,car4;

let carz;

function preload(){
  cari1 = loadImage("images/car1.png")
  cari2 = loadImage("images/car2.png")
  cari3 = loadImage("images/car3.png")
  cari4 = loadImage("images/car4.png")
  // Milk
  track = loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount == 4){
    game.update(1);
  }

  if(gameState == 1){
    game.play();
  }

  if(gameState == 2){
    game.end();
  }
}
