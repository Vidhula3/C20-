var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="green";
  b=createSprite(600, 400, 65, 70);
  b.shapeColor="green";
}

function draw() {
  background("brown"); 
  
  b.y=mouseY;
  b.x=mouseX;

  if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2&&a.y-b.y<a.height/2+b.height/2&&b.x-a.x<a.height/2+b.height/2){
    a.shapeColor="blue";
    b.shapeColor="blue";
  }
else{
  a.shapeColor="green";
  b.shapeColor="green";
}
  drawSprites();
}