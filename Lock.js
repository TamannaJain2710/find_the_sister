
class Lock {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(displayWidth/2 - 100,displayHeight/2 + 20);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(displayWidth/2 - 100,displayHeight/2 + 50);
        this.button1.style('background', 'lightgrey');  

        this.access2 = createInput("Code2")
        this.access2.position(displayWidth/2 - 100,displayHeight/2 + 20);
        this.access2.style('background', 'white');  
        this.access2.hide()
        this.button2 = createButton('Check');
        this.button2.position(displayWidth/2 - 100,displayHeight/2 + 50);
        this.button2.style('background', 'lightgrey');
        this.button2.hide()

    }
display(){

    this.button1.mousePressed(() => {
        console.log(this.access1.value())
        if(this.access1.value() === "sponge"){
            this.button1.hide();
            this.access1.hide();
            console.log("inside If match")
         
            //score++;
            this.access2.show()
            this.button2.show()
        }
            else{

                textSize(100);
                fill("black");
                text("Wrong Ans",200,200)
    
    
            }
    
        
    })
}  
       


    

}