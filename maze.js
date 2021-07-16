class Maze{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.x= x;
        this.y =y;
        this.height = height;
        this.width = width;

        World.add(world,this.body);
    }
    display(){
        fill("grey");
        rect(this.x,this.y,this.width,this.height);

    }
}