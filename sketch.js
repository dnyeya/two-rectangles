var fixedrect , moverect;



function setup() {
  createCanvas(1200,400);
  fixedrect = createSprite(600, 400, 50, 50);
  fixedrect.shapeColor = "red";
  moverect = createSprite(800,400,80,30);
  moverect.shapeColor = "red";
}

function draw() {
  background("white");   
 moverect.x = World.mouseX;
 moverect.y = World.mouseY;

 if(moverect.x-fixedrect.x<fixedrect.width/2+moverect.width/2
  && fixedrect.x-moverect.x<fixedrect.width/2+moverect.width/2
  && moverect.y-fixedrect.y<fixedrect.height/2+moverect.height/2
  && fixedrect.y-moverect.y<fixedrect.height/2+moverect.height/2){
    moverect.shapeColor = "pink";
    fixedrect.shapeColor = "blue";
  }
else{
  moverect.shapeColor = "red";
  fixedrect.shapeColor = "red";
}


  drawSprites();
}