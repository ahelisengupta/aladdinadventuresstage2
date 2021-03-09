var bg,bg2;
var aladdin,aladdinImg;
var genie,genieImg;
var carpet,carpetImg;
var playButton,playButtonImg;
var gameState=0;

function preload(){
    bgImg= loadImage("Images/bg0.jpg");
    bgImg2=loadImage("Images/bg1.jpg");
    aladdinImg=loadImage("Images/aladdin.png");
    genieImg=loadImage("Images/genie.png");
    carpetImg=loadImage("Images/Carpet.png");
    playButtonImg=loadImage('Images/PlayButton.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(bgImg);

  carpet=createSprite(width/2-400, height/2+250);
  carpet.addImage(carpetImg);
  carpet.scale=0.8;

  

  genie=createSprite(width/2+400, height/2);
  genie.scale=0.8;
  genie.addImage(genieImg);

  playButton=createSprite(width/2,height/2+125);
  playButton.addImage(playButtonImg);
  playButton.scale=0.15;
}

function draw() {
  background("black");  

  console.log(gameState);

  drawSprites();
  if(gameState===0){
    bg.visible=true;
    createAladdin();
    genie.visible=true;
    carpet.visible=true;
    playButton.visible=true;

    textSize(25);
    fill(254,182,21);
    stroke("white");
    text("Instructions :\n 1) Use arrow keys to move Aladdin \n 2) Avoid hurdles to reach the final level \n 3) You have 3 lives to save Jasmine from Jafar",width/2-250,height/2-50);

    if(mousePressedOver(playButton)){
      gameState=1;
      console.log("gameStatePlay");
    }
  }

  if(gameState===1){
    bg.visible=false;
   // aladdin.destroy();

    genie.visible=false;
    carpet.visible=false;
    playButton.visible=false;

    if(keyDown("space")){
  //    aladdin.visible=true;
  createAladdin();
      text("testing",width/2,height/2);
    }
   
    bg2=createSprite(width/2,height/2-150,width,height);
    bg2.addImage(bgImg2);
    bg2.scale=2.75;

    
  }
}
function createAladdin(){
  aladdin=createSprite(width/2-425, height/2);
  aladdin.scale=0.5;
  aladdin.addImage(aladdinImg);
}
/* 
Aladdin will be flying n the rocks will be coming from either the sides or from frnt
*/