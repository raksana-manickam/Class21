var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  rect1 = createSprite(200,500,100,50);
  rect1.shapeColor = "blue";

  rect2 = createSprite(200,200,50,100);
  rect2.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "pink";
  }

  else if(isTouching(movingRect, rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "pink";
  }

  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }


  drawSprites();
}

