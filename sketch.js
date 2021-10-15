var balloon,background,position;
var database;

function preload()
{
bgImg=loadImage("images/1.png")
//baloonimg = loadAnimation("images/2.png");
balloonimg=loadAnimation("images/2.png","images/3.png","images/4.png");

}


function setup() 
{
  database = firebase.database();
  createCanvas(1200,700);
  
  balloon= createSprite(100,400,20,20)
  balloon.addAnimation("balloon",balloonimg);

  var b = database.ref('balloon/position');
  b.on("value",readHeight);
}

function draw() 
{
  background(bgImg);

  if(keyDown(LEFT_ARROW))
  {
    updateHeight(-10,0);
    balloon.addAnimation("3.png",balloonimg);
  }
  else if(keyDown(RIGHT_ARROW))
  {
    updateHeight(10,0);
    balloon .addAnimation("3.png",balloonimg);
  }

  if(keyDown(UP_ARROW))
  {
    updateHeight(0,-10);
    balloon.addAnimation("3.png",balloonimg);
    balloon.scale=balloon.scale -0.005;
  }
  

  if(keyDown(DOWN_ARROW)){
    updateHeight(0,10);
    balloon .addAnimation("3.png",balloonimg);
    balloon.scale=balloon.scale +0.005;
 }
 drawSprites();
}


function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readHeight(data)
{
  position=data.val();
balloon.x =position.x;
balloon.y = position.y;
}
  