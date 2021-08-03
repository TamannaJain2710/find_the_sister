class Test{
    constructor(width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(150, 150, width, height, options);
        this.x = 150;
        this.y = 150;
        this.width = width;
        this.height = height;
      //  this.angle = angle
       // this.image = loadImage("sprites/base.png");
     Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
         rotate(PI/7);
        //imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);
       rect(this.x,this.y,this.width,this.height);
        pop();
      }
}