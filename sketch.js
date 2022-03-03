var garden,rabbit,apple,orangeL,redL,leaf,grass;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,leafImg,grassImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  leafImg = loadImage("leaf.png");
  grassImg = loadImage("grass.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating rabbit running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

grass = createSprite(390,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(370,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(350,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(330,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(310,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(290,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(270,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(250,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(230,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(210,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(190,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(170,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(150,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(130,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(110,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(90,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(70,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(50,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(30,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(10,380,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);

grass = createSprite(125,310,10,10);
grass.scale = 0.06;
grass.addImage(grassImg);
grass.depth =  rabbit.depth;
rabbit.depth =  rabbit.depth;

}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  


 var select_sprites = Math.random(random(1,2));

 var select_sprites = Math.round(random(1,2));

  
   if (frameCount % 50 == 0) {
     if (select_sprites == 1) {
       createRed();
     }
      else if (select_sprites == 2) {
       createGreen();
     }
     else {
       createOrange(); 
    }
   }

   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
    } 
    else if (select_sprites == 2) {
      createGreen();
    }
    else {
      createRed();
    }
   }

}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 2;
apple.lifetime = 150;
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 2;
orangeL.lifetime = 150;
orangeL.depth = rabbit.depth;
rabbit.depth = rabbit.depth+1;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 2;
  redL.lifetime = 150;
  redL.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
}


function createGreen() {
  leaf = createSprite(random(50, 350),40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.06;
  leaf.velocityY = 2;
  leaf.lifetime = 150;
  leaf.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  
  }