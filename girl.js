class Girl{
    constructor(x,y){
        var option={
            isStatic:true,
            restitution:2
        }
        this.body = Bodies.rectangle(x,y,100,100,option);
        this.x= x;
        this.y =y;
        this.height = 10;
        this.width = 10;
        World.add(world,this.body);
    }
    display(){
        rect(this.x,this.y,this.width,this.height);

    }

}