class Maze{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.x= x;
        this.y =y;
        this.angle = 0;
        this.height = height;
        this.width = width;
        Matter.Body.setAngle(this.body, this.angle);
        console.log(this.body);
        World.add(world,this.body);
    }
    display(){
        fill("green");
        rect(this.x,this.y,this.width,this.height);

    }
}