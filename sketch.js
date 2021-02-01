var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);


speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)

bullet=  createSprite(50, 200, 40, 5);
bullet.velocityX=5;
bullet.shapeColor="white";

wall= createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);


thickness=random(22,83)
}

function draw() {
  background("black");  

  hasCollided(bullet,wall)

if(hasCollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0);
}

}

  drawSprites();

 
}

function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x=lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){

  return true
}
return false;
}