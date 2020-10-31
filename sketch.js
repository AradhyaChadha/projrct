var thickness,wall;
var bullet,weight,speed;
var Damage;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(40,53);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
bullet.weight(30,52) ;
  bullet.speed(223,321);

  wall=createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(255,255,255);  
  console.log(speed);
  if (wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
  




if (hasCollided(bullet,wall)){

  Damage= (0.5*weight*speed*speed)/thickness*thickness*thickness;

  if(Damage>10){
    wall.shapeColor="red"(255,0,0);
  }

  if(Damage<10){
    wall.shapeColor="green"(0,225,0);
  }
}



 











  drawSprites();
}
}


