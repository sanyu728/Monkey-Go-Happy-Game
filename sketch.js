var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survivalTime=0;

function preload()
{
  monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage   = loadImage("banana.png");
  obstacleImage   = loadImage("obstacle.png");
}

function setup() 
{
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  stroke('black');
  textSize(20);
  fill('black');
}

function draw() 
{
  background(255);
  
  if(ground.x<0) 
  {
    ground.x=ground.width/2;
  }    
  
  //creating scrolling obstacles
  if (frameCount % 300 == 0)
  {
    obstacle=createSprite(300,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.velocityX=-3;
    obstacle.lifetime=150;
  }
  
  //creating scrolling bananas
  if (frameCount % 80 == 0)
  {
    banana=createSprite(400,Math.round(random(120,200)),10,10); 
    banana.addImage(bananaImage);    
    banana.scale=0.1
    banana.velocityX=-3;
    banana.lifetime=150;
  }
  
  
  //Monkey jumping when hitting spacebar
  if(keyDown("space")) 
  {
    monkey.velocityY = -12;
    score = score + 1;
  }    
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival: "+ survivalTime, 100,50);

  text("Score: "+ score,300,50);

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
    
  drawSprites();
  }