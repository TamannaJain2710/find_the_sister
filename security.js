class lock {

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
        this.access2.hide();

        this.button2 = createButton('Check');
        this.button2.position(displayWidth/2 - 100,displayHeight/2 + 50);
        this.button2.style('background', 'lightgrey');
        this.button2.hide();

        this.access3 = createInput("Code3")
        this.access3.position(displayWidth/2 - 100,displayHeight/2 + 20);
        this.access3.style('background', 'white');  
        this.access3.hide();

        this.button3 = createButton('Check');
        this.button3.position(displayWidth/2 - 100,displayHeight/2 + 50);
        this.button3.style('background', 'lightgrey');
        this.button3.hide();

        this.access4 = createInput("Code4")
        this.access4.position(displayWidth/2 - 100,displayHeight/2 + 20);
        this.access4.style('background', 'white');  
        this.access4.hide();

        this.button4 = createButton('Check');
        this.button4.position(displayWidth/2 - 100,displayHeight/2 + 50);
        this.button4.style('background', 'lightgrey');
        this.button4.hide();

        this.access5 = createInput("Code5")
        this.access5.position( displayWidth/2 - 100,displayHeight/2 + 20);
        this.access5.style('background', 'white');  
        this.access5.hide();

        this.button5 = createButton('Check');
        this.button5.position(displayWidth/2 - 100,displayHeight/2 + 50);
        this.button5.style('background', 'lightgrey');
        this.button5.hide();
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value()) === true){
                this.button1.hide();
                this.access1.hide();
                this.button2.show();
                this.access2.show();
                score++;
            }else if (system.authenticate(accessCode1,this.access1.value()) !== true){
                textSize(100);
                fill("black");
                text("Wrong Ans",200,200)
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                this.button3.show();
                this.access3.show();
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
                this.button4.show();
                this.access4.show();
            }
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
                this.button5.show();
                this.access5.show();
                }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });
        

    }
}