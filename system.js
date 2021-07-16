class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text("correct",displayWidth/2,displayHeight/2+50)
        
        if(actualCode === enteredCode.toUpperCase()){
            return true
        } else{
            return false
        }

        
    }

}