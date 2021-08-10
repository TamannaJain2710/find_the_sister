const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, locks,system;
var score =0;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25,m26,m27,m28;
var girl,gImg,girl2,gImg2;
var question = 1;
var maze = 2;
var gameState = maze;

function preload(){
    bg = loadImage("jungle.jpg")
    gImg = loadAnimation("images/girl-1.png","images/girl-2.png","images/girl-3.png","images/girl-4.png","images/girl-5.png","images/girl-6.png","images/girl-7.png")
}

function setup(){
    createCanvas(displayWidth - 10,displayHeight -110);
    engine = Engine.create();
    world = engine.world;
    m1 = new Maze(100,0,20,60);
    m2 = new Maze(115, 185,20,100);
    m3 = new Maze(115,185,100,20);
    m4 = new Maze(115,285,100,20);
    m5 = new Maze(195,285,20,100);
    m6 = new Maze(115,370,100,20);
    m7 = new Maze(290 ,185,20,205);
    m8 = new Maze(415,185,100,20);
    m9 = new Maze(415,185,20,100);
    m10 = new Maze(415,285,100,20);
    m11 = new Maze(495,285,20,100);
    m12 = new Maze(415,370,100,20);
    m13 = new Maze(590,185,100,20);
    m14 = new Maze(630,185,20,205);
    m15 = new Maze(765,185,100,20);
    m16 = new Maze(765,185,20,205);
    m17 = new Maze(765,285,100,20);
    m18 = new Maze(765,370,100,20);
    m19 = new Maze(940,185,20,205);
    m20 = new Maze(940,185,100,20);
    m21 = new Maze(1040,185,20,100);
    m22 = new Maze(940,285,120,20);
    m23 = new Angle(950,470);
    m24 = new Maze(0,130,80,20);
    m25 = new Maze(1200,500,100,20);
    m26 = new Maze(1100,550,20,100);
    m27 = new  Maze(360,0,100,20)
    m28= new Maze(50,50,100,100);
    girl = new Girl(20,25);
    girl2 = new Girl(1200,550);
    //girl2.collide(m28);
    //girl = createSprite(20,25);
    //girl.addAnimation("girlWalking",gImg)
    
    locks = new lock();
    system = new System();
}

function draw(){
    background(bg);
    Engine.update(engine);
    //console.log(mouseX,mouseY);

    if (gameState === question){
        locks.display();
        riddle();
    if(score === 1){
        clear();
        background(bg);
        fill("black");
        textSize(15);
        text("What can you break, even if you never pick it up or touch it?", displayWidth/2 - 100,displayHeight/2)
      
    } else if (score === 2){
        clear();
        background(bg);
        fill("black");
        textSize(15);
        text("It is the rare case when today comes before yesterday", displayWidth/2 - 100,displayHeight/2)

    } else if (score === 3){
        clear();
        background(bg);
        fill("black");
        textSize(15);
        text("Mary's father has 4 children; \n three are named Nana, Nene, and Nini. \n So what is is the 4th child's name?", displayWidth/2 - 100,displayHeight/2-50)
    } else if (score === 4){
        clear();
        background(bg);
        fill("black");
        textSize(15);
        text("What begins with T, finishes with T, and has T in it?", displayWidth/2 - 100,displayHeight/2)
    }
    
    textSize(20);
    fill("white");
    text("Passed Riddles: " + score + "/5", 450, 50);
    
    if (score === 5) {
        clear()
        background("black")
        fill("black")
        textSize(40);
        text("You Can Proceed",displayWidth/2 -100, displayHeight/2);
        gameState = maze;
      }
    } else if(gameState === maze){
        clear();
        background("black")
        //camera.x = girl.x;
        //camera.y = girl.y;
        m1.display();
        m2.display();
        m3.display();
        m4.display();
        m5.display();
        m6.display();
        m7.display();
        m8.display();
        m9.display();
        m10.display();
        m11.display();
        m12.display();
        m13.display();
        m14.display();
        m15.display();
        m16.display();
        m17.display();
        m18.display();
        m19.display();
        m20.display();
        m21.display();
        m22.display();
        m23.display();
        m24.display();
        m25.display();
        m26.display();
        m27.display();
        m28.display();
        girl.display();
        girl2.display();

        if(keyIsDown(RIGHT_ARROW)){
            girl.x += 10;
        } else if(keyIsDown(LEFT_ARROW)){
            girl.x -= 10;
        } else if(keyIsDown(UP_ARROW)){
            girl.y -= 10;
        } else if(keyIsDown(DOWN_ARROW)){
            girl.y += 10;
        }
        drawSprites();
    }
    
    detectCollision(girl,m28);
   
}

function detectCollision(lstone,lmango)
{
    var collision = Matter.SAT.collides(lstone,lmango).collided; 
    if(collision.collided){ 
        console.log("collided"); 
        Matter.Body.setStatic(lmango,false); 
    }
 /*mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance);
  if(distance<=40)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }*/

}
