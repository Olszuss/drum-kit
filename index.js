for(var i = 0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function() {


    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    
    switch (key){
        case "w" :
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.volume = 0.1;
            tom1.play(); 
            break;
        
        case "a" :
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.volume = 0.1;
            tom2.play(); 
            break;
        case "s" :
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.volume = 0.1;
            tom3.play(); 
            break;
        case "d" :
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.volume = 0.1;
            tom4.play(); 
            break;
        case "j" :
            var snare = new Audio("./sounds/snare.mp3");
            snare.volume = 0.1;
            snare.play(); 
            break;
        case "k" :
            var crash = new Audio("./sounds/crash.mp3");
            crash.volume = 0.1;
            crash.play(); 
            break;
        case "l" :
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.volume = 0.1;
            kick.play(); 
            break;

        default:
            console.log(buttonInnerHTML + "clicked")
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}
// var audio = new Audio("./sounds/tom-1.mp3");
// audio.volume = 0.1;
// audio.play();