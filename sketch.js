
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var land
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600)
  

  monkey = createSprite(75,550)
  monkey.addAnimation("running" , monkey_running)
  monkey.scale = 0.25
  
  land = createSprite(300,600,800,10)
  
  FoodGroup = createGroup()
  
 
  
}


function draw() {
background("white")
    
  monkey.collide(land)
  
  monkey.velocityY = monkey.velocityY + 0.5
  
  if(keyDown("space") ) {
    
    monkey.velocityY = -10
    
  }
  
  
  
  
  obstacles()
  bananaS()
  
  
  
  
  drawSprites()
  
  if(monkey.isTouching(FoodGroup)) {
    FoodGroup.destroyEach()
    
  }
}


function obstacles() {
  
  if(frameCount % 50 === 0) {
   var obstacle = createSprite(600,570)
   obstacle.addImage(obstacleImage) 
    obstacle.scale = 0.25
    obstacle.velocityX = -10
  }
  
}

function bananaS() {
  
  if(frameCount % 50 === 0) {
  var banana = createSprite(600,400)
  banana.addImage(bananaImage)
  banana.scale=0.125
  banana.velocityX = -10
    
    FoodGroup.add(banana)
    
  
  }
}



