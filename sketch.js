var rabbit;garden;apple;orangel;redl
var appleImg;gardenImg;rabbitImg;redlImg;orangelImg

function preload(){
 rabbitImg = loadImage("rabbit.png");
 gardenImg = loadImage("garden.png");
 appleImg = loadImage("apple.png");
 leafImg = loadImage("leaf.png");
 redlImg = loadImage("redImage.png");
 orangelImg = loadImage("orangeLeaf.png");
}

function setup(){
 createCanvas(400,400);

 garden = createSprite(200,200);
 garden.addImage("garden",gardenImg)

 rabbit = createSprite(200,340,20,10);
 rabbit.addImage("rabbit",rabbitImg);
 rabbit.scale=0.1;




}

function draw(){

 rabbit.x = World.mouseX;

 edges = createEdgeSprites();
 rabbit.collide(edges);

 var select_sprites = Math.round(random(1,3));

 if (frameCount % 50 == 0) {
      if (select_sprites == 1) {
        createApple();
       } else if (select_sprites == 2) {
         createOrangeleaf();
      }else {
        createRedleaf();
       }
     }

drawSprites();
}

function createApple() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
    
  }
  
  function createOrangeleaf() {
  orangel = createSprite(random(50, 350),40, 10, 10);
  orangel.addImage(orangelImg);
  orangel.scale=0.08;
  orangel.velocityY = 3;
  orangel.lifetime = 150;
  }
  
  function createRedleaf() {
  redl = createSprite(random(50, 350),40, 10, 10);
  redl.addImage(redlImg);
  redl.scale=0.06;
    redl.velocityY = 3;
    redl.lifetime = 150;
  }