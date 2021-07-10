var bg, locks,system;
var score =0;
function preload(){
    bg = loadImage("jungle.jpg")
}

function setup(){
    createCanvas(displayWidth - 10,displayHeight -110);
    locks = new lock();
    system = new System();
}

function draw(){
    background(bg);
    locks.display();
    riddle();
    textSize(20);
    fill("white");
    text("Passed Riddles: " + score + "/5", 450, 50);
    if(score === 3) {
        clear()
       // background(bg2)
        fill("black")
        textSize(40);
        text("You Can Proceed",displayWidth/2 -100, displayHeight/2);
      }
    drawSprites();
}
