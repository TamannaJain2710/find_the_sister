class Angle{
  constructor(x,y){
      var option={
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,20,100,option);
      this.height = 20;
      this.width = 100;
      this.x= x;
      this.y =y;
      World.add(world,this.body);
  }
  display(){
      push()
      translate(this.height/2, this.width/2);
      angleMode(RADIANS);
      rotate(-PI/14.0);
      fill("green");
      rect(this.x,this.y,20,100);
      pop();
  }
}