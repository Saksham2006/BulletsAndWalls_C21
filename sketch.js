var wall, thickness;
var bullet,speed, weight;

function setup() 
{
  createCanvas(1600, 400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 20,5);  
  bullet.velocityX = speed/10;
  bullet.shapeColor="red";
  wall=createSprite(1200, 200, thickness, height/2);  
  wall.shapeColor=color(230,230,230);
}
function draw() 
{
  background(0);  
  drawSprites();
  
 
 
    if(((0.5*weight*speed*speed)/(thickness*thickness*thickness))<10&&(bullet.x>wall.x)) {
    wall.shapeColor="red";
    fill("red");
    textSize(50);
    text("Damage > 10, Test failed",400,200);
    }
    else if (((0.5*weight*speed*speed)/(thickness*thickness*thickness))>10&&(bullet.x>wall.x)){
      wall.shapeColor="green";
      fill("green");
    textSize(50);
    text("Damage < 10, Test successful",400,200);
    }
  }