const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, locks,system;
var score =0;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;

function preload(){
    bg = loadImage("jungle.jpg")
}

function setup(){
    createCanvas(displayWidth - 10,displayHeight -110);
    engine = Engine.create();
    world = engine.world;

    m1 = new Maze(displayWidth/2-100,displayHeight/-100,100,20);
    /*m2 = new Maze(,,20,100);
    m3 = new Maze(,,100,20);
    m4 = new Maze(,,20,100);
    m5 = new Maze(,,20,100);
    m6 = new Maze(,,100,20);
    m7 = new Maze(,,20,100);
    m8 = new Maze(,,100,20);*/

    //console.log(World.mouseX,World.mouseY);

    locks = new lock();
    system = new System();
}

function draw(){
    background(bg);
    Engine.update(engine);
    locks.display();
    //locks.bs();
    riddle();
    textSize(20);
    fill("white");
    text("Passed Riddles: " + score + "/5", 450, 50);
    if(score === 1) {
        clear()
        background("black")
        fill("black")
        textSize(40);
        text("You Can Proceed",displayWidth/2 -100, displayHeight/2);
        m1.display();
        
      }
    drawSprites();
}
