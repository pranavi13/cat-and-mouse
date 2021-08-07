var bgImage;
var cat;
function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
    catImage1=loadAnimation("images/cat1.png");
    mouseImage1=loadAnimation("images/mouse1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImage1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImage1);
    mouse.scale = 0.15;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
}

}
