var seaImg , seaImg1;
var boat , sea ;

function preload(){
seaImg = loadImage("sea.png");
seaImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
createCanvas(400,400);


sea=createSprite(400,200);
sea.addImage(seaImg);
sea.velocityX = -5 ;
sea.scale = 0.3;

boat=createSprite(130,200,30,30);
boat.addAnimation("moving ship",seaImg1);
//edge = createEdgeSprite();

boat.scale = 0.25 ;
boat.x = 50;

}

function draw(){
  background("blue");

  sea.velocityX = -2 ;
  //console.log(sea.x);

if (sea.x < 0){
    sea.x = sea.width/8 ;
}

drawSprites();
} 

