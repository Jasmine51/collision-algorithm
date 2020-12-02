var movingRect, fixedRect; // creating variables



function setup() {
  createCanvas(800,800); // creating canvas
  fixedRect= createSprite(400, 200, 50, 80); // creating sprite for fixed rect
  fixedRect.shapeColor="green"; // giving the colour
  fixedRect.degug="true"; // to see the collider

  movingRect= createSprite(600,200,80,30); // creating sprite for moving rect
  movingRect.shapeColor="green";// giving the colou
  movingRect.debug="true";// to see the collider
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=World.mouseX; // the moving rectangle moves with the mouse
  movingRect.y=World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x< fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2+ movingRect.height/2){ // the collision algorithm
       fixedRect.shapeColor= "blue";
      movingRect.shapeColor= "blue";
    }
    else{
      fixedRect.shapeColor= "green";
      movingRect.shapeColor="green";
    }
  drawSprites();
}