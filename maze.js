class Maze{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
            restitution:2
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.x= x;
        this.y =y;
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }
    display(){
        fill("green");
        rect(this.x,this.y,this.width,this.height);

    }
}