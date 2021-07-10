class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text("correct",displayWidth/2+10,displayHeight/2)
        
        if(actualCode === enteredCode.toUpperCase()){
            return true
        } else{
            return false
        }

        
    }

}