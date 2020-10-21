var wall, thickness;
var bullet,speed, weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2); 
  
}

function draw(){
  background(0);  

  bullet.collide(wall);

  if (bullet.velocityX=55){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=56){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=57){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=58){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=59){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=60){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=61){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=62){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=63){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=64){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=65){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=66){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=67){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=68){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=69){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=70){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=71){
    wall.shapeColor="red"
  }

  if (bullet.velocityX=72){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=73){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=74){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=75){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=76){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=77){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=78){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=79){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=80){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=81){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=82){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=83){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=84){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=85){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=86){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=87){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=88){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=89){
    wall.shapeColor="green"
  }

  if (bullet.velocityX=90){
    wall.shapeColor="green"
  }

  if (bullet.isTouching(wall)){
    bullet.velocityX=0;
  }
  
  drawSprites();
}
