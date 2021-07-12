// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;

// make all var/variable.
var player1 , player2 , player3;
var enemy1 , enemy2 , enemy3;
var bg; 
var player , form , game;
var anamies;
var gun1;
var wall1 , wall2 , wall3 , wall4 , wall5 , wall6 , wall7 , wall8 , wall9 , wall10 , wall11 , wall12 , wall13 , wall14 , wall15 , wall16;
var allPlayers;
var game;
var gunX,gunY;
var bullet;

//preload all img/images

function preload(){
  // bullet
  bulletImg = loadImage("Images/bullet.png")
  

  // players 1 , 2 , 3 load images

  player1Img = loadImage("Images/friend1.png");
  player2Img = loadImage("Images/friend2.png");
  player3Img = loadImage("Images/style1.png");

  // background/map load image
  
  bg = loadImage("Images/map3.jpg");

  // enemy 1 , 2 , 3 load images

  enemy1Img = loadImage("Images/anamy2.png");
  // enemy2Img = loadImage("Images/anamy1.png");
  enemy3Img = loadImage("Images/anamy3.png");
  //enemyGroup = new Group();

  // load Images of guns

  gun1Img = loadImage("Images/gun2.png")
  gun2Img = loadImage("Images/gun3.png")
  gun3Img = loadImage("Images/gun4.png")
  gun4Img = loadImage("Images/gun5.png")
  gun5Img = loadImage("Images/gun6.png")
  gun6Img = loadImage("Images/gun7.png")
  gun7Img = loadImage("Images/gun8.png")
  gun8Img = loadImage("Images/gun9.png")
  gun9Img = loadImage("Images/gun10.png")


}

//create setup

function setup() {

  // create canvas

  createCanvas(windowWidth,windowHeight);

  // database

  database = firebase.database();

  // game = new Game();
  // game.getState();
  // game.start();

  // engine = Engine.create();
  // world = engine.world();
  gunGroup = new Group();
  enemyGroup = new Group();
 
  
  // create sprite of player 1 , 2 , 3
  
  player1 = createSprite(540,80, 50, 50);
  player1.addImage(player1Img);
  player1.scale = 0.10;
  // player2 = createSprite(250, 200, 50, 50);
  // player2.addImage(player2Img);
  // player3 = createSprite(300, 200, 50, 50);
  // player3.addImage(player3Img);

  // gun1 = createSprite(438,200,10,10);
  // gun1.scale = 0.25
  // gun1.addImage(gun1Img);

  // gun2 = createSprite(770,200,10,10);
  // gun2.scale = 0.25
  // gun2.addImage(gun2Img);

  // gun3 = createSprite(760,333,10,10);
  // gun3.scale = 0.25
  // gun3.addImage(gun3Img);

  // gun4 = createSprite(530,325,10,10);
  // gun4.scale = 0.25
  // gun4.addImage(gun4Img);

  // gun5 = createSprite(640,470,10,10);
  // gun5.scale = 0.25
  // gun5.addImage(gun5Img);

  // gun6 = createSprite(890,270,10,10);
  // gun6.scale = 0.25
  // gun6.addImage(gun6Img);

  // gun7 = createSprite(635,295,10,10);
  // gun7.scale = 0.25
  // gun7.addImage(gun7Img);

  // gun8 = createSprite(370,270,10,10);
  // gun8.scale = 0.25
  // gun8.addImage(gun8Img);

  // gun9 = createSprite(750,90,10,10);
  // gun9.scale = 0.25
  // gun9.addImage(gun9Img);
  bullet1 = createSprite(200,200,10,20);
  bullet1.addImage(bulletImg);
  bullet1.visible = false;



  wall1 = createSprite(580,265,10,50);
  // wall1.visible = false;
  
  wall2 = createSprite(455,250,10,90);
  // wall2.visible = false;

  wall3 = createSprite(455,385,10,90);
  // wall3.visible = false;

  wall4 = createSprite(495,250,10,90);
  // wall4.visible = false;

  wall5 = createSprite(495,385,10,90);
  // wall5.visible = false;

  wall6 = createSprite(585,260,50,10);
  // wall6.visible = false;

  wall7 = createSprite(539,290,90,10);
  // wall7.visible = false;

  wall8 = createSprite(539,345,90,10);
  // wall8.visible = false;

  wall9 = createSprite(729,345,90,10);
  // wall9.visible = false;

  wall10 = createSprite(729,290,90,10);
  // wall10.visible = false;

  wall11 = createSprite(650,585,1000,10);
  // wall11.visible = false;

  wall12 = createSprite(650,58,1000,10);
  // wall12.visible = false;

  wall13 = createSprite(525,110,160,10);
  // wall13.visible = false;

  wall14 = createSprite(755,110,200,10);
  //  wall14.visible = false;

  wall15 = createSprite(635,315,50,20);
  // wall9.visible = false;

  wall16 = createSprite(778,250,10,90);
  // wall10.visible = false;

  wall17 = createSprite(555,206,130,10);
  // wall10.visible = false;

  wall18 = createSprite(615,230,10,50);
  // wall10.visible = false;

  wall19 = createSprite(658,230,10,50);
  // wall13.visible = false;

  wall20 = createSprite(718,205,130,10);
  //  wall14.visible = false;

  wall21 = createSprite(688,260,50,10);
  // wall9.visible = false;

  wall22 = createSprite(688,267,10,50);
  // wall10.visible = false;

  wall23 = createSprite(355,345,190,10);
  // wall10.visible = false;

  wall24 = createSprite(355,290,190,10);
  // wall10.visible = false;

  //

  wall25 = createSprite(910,345,190,10);
  // wall25.visible = false;

  wall26 = createSprite(910,290,190,10);
  //  wall26.visible = false;

  wall27 = createSprite(470,150,300,10);
  // wall27.visible = false;

  wall28 = createSprite(810,150,300,10);
  // wall28.visible = false;

  wall29 = createSprite(815,250,10,90);
  // wall29.visible = false;

  wall30 = createSprite(579,370,10,50);
  // wall30.visible = false;

//


  wall31 = createSprite(590,370,50,10);
  // wall31.visible = false;

  wall32 = createSprite(690,370,50,10);
  //  wall32.visible = false;

  wall33 = createSprite(690,370,10,50);
  // wall33.visible = false;

  wall34 = createSprite(360,210,200,10);
  // wall34.visible = false;

  wall35 = createSprite(1050,250,10,1000);
  // wall35.visible = false;

  wall36 = createSprite(200,200,10,1000);
  // wall36.visible = false;

//

wall37 = createSprite(400,425,100,10);
// wall37.visible = false;

wall38 = createSprite(690,370,50,10);
//  wall38.visible = false;

wall39 = createSprite(778,385,10,90);
// wall39.visible = false;

wall40 = createSprite(815,385,10,90);
// wall40.visible = false;

wall41 = createSprite(620,400,10,50);
// wall41.visible = false;

wall42 = createSprite(660,400,10,50);
// wall42.visible = false;

//

wall43 = createSprite(557,425,130,10);
// wall43.visible = false;

wall44 = createSprite(720,425,130,10);
// wall44.visible = false;

wall45 = createSprite(630,487,530,10);
// wall45.visible = false;

wall46 = createSprite(660,400,10,50);
// wall46.visible = false;
  
}

// create function draw

function draw() {
 background(bg);
 fill("black")
 textSize(20);
 text("MINI FIRE", 588,24,150,150)

  // arc(200,400,180,10,PI,TWO_PI);
  // fill('black');
  // arc(230, 290, 140, 200, PI, TWO_PI);
 
  if(keyWentDown(RIGHT_ARROW)){
    player1.x = player1.x+10;
    // player1.x = camera.x
  }
  if(keyWentDown(LEFT_ARROW)){
    player1.x = player1.x-10;
    // player1.x = camera.x
  }
  if(keyWentDown(UP_ARROW)){
    player1.y = player1.y-10;
    // player1.y = camera.y
  }
  if(keyWentDown(DOWN_ARROW)){
    player1.y = player1.y+10;
    // player1.y = camera.y
  }
  bullet1.x = player1.x;
  bullet1.y = player1.y;

  // if(playerCount === 3){
  //   game.update(1);
  // }
  // if(gameState === 1){
  //   clear();
  //   game.play();
  //   spawn();
  //   spawn2();
  //   spawn3();
  // }
  // if(gameState === 2 ){
  //   game.end();
  // }

  //background(bg);
  fill("black")
  text(mouseX + "  " + mouseY,mouseX,mouseY)
  
  
 // Engine.update(engine);

 //spawner();

 //console.log('GAME_STARTED');
 //player1.collide()
 //console.log(frameCount);
 player1.collide(wall1);
 player1.collide(wall2);
 player1.collide(wall3);
 player1.collide(wall4);
 player1.collide(wall5);
 player1.collide(wall6);
 player1.collide(wall7);
 player1.collide(wall8);
 player1.collide(wall9);
 player1.collide(wall10);
 player1.collide(wall11);
 player1.collide(wall12);
 player1.collide(wall13);
 player1.collide(wall14);
 player1.collide(wall15);
 player1.collide(wall16);
 player1.collide(wall17);
 player1.collide(wall18);
 player1.collide(wall19);
 player1.collide(wall20);
 //
 player1.collide(wall21);
 player1.collide(wall22);
 player1.collide(wall23);
 player1.collide(wall24);
 player1.collide(wall25);
 player1.collide(wall26);
 player1.collide(wall27);
 player1.collide(wall28);
 player1.collide(wall29);
 player1.collide(wall30);
 player1.collide(wall31);
 player1.collide(wall32);
 player1.collide(wall33);
 player1.collide(wall34);
 player1.collide(wall35);
 player1.collide(wall36);
//  player1.collide(wall37);
//  player1.collide(wall38);
//  player1.collide(wall39);
//  player1.collide(wall40);

gunX = player1.x+100;
gunY = player1.y;


  drawSprites();
  spawnGuns();
  spawner();
  
  


}


// move player1 1



//snawner [it help's to spawn enemy randomly on screen]

function spawner(){
  console.log(frameCount);
if (frameCount % 20 === 0) {
  anamies = createSprite(random(width+100, 100), 100, 100, 100);
  // anamies.velocityY = 1;
 anamies.velocityX = -1
   var rand = Math.round(random(1,2));
   switch(rand){
      //  case 1: anamies.addImage("enemy1Img",enemy1Img);
      //  break;
       case 1: anamies.addImage("enemy1Img",enemy1Img);
       break;
       case 2: anamies.addImage("enemy1Img",enemy3Img);
       break;

   }

   enemyGroup.add(anamies);
   anamies.scale = 0.25;
   
}
}

function spawnGuns(){
  console.log(frameCount);
  console.log(gunX);
  console.log(gunY);
  if(frameCount%500 === 0){
    var gun = createSprite(gunX,gunY,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.25;
    gun.lifetime = 500;
    gunGroup.add(gun);
  }
}

function keyPressed(){
  if(keyCode === 32){
    bullet1.visible = true;
    bullet1.velocityX = 10;

  }
}







