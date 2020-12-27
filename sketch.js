var wall, car;
var speed, weight;


function setup() {
  createCanvas(1600, 400);

speed = random (100, 200);
width = random (25, 30);

  car = createSprite(500, 200, 30, 30);
  car.velocityX = 5;

  wall = createSprite(1200, 200, 30, 50);

}

function draw() {
  background("black");  
  
  touching(wall, car);

  drawSprites();
}

function touching(object1, object2){

if(object1.x-object2.x < (object2.width + object1.width)/2){
 
  object2.velocityX = 0;
  var deformation = speed;
  
  if(deformation > 180){
  
    object2.shapeColor = ("yellow");
    object1.shapeColor = ("white");
  }
   
  if(deformation > 180 && deformation < 100){

    object2.shapeColor = ("green");
    object1.shapeColor = ("white");
  }

  if(deformation < 180){

    object2.shapeColor = ("red");
    object1.shapeColor = ("white");
  }

}

}