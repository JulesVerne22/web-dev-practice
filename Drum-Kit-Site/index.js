buttons = document.querySelectorAll(".drum");

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",handleClick);
}

document.addEventListener("keydown",handleKey);

function handleKey(event) {
    playAudio(event.key);
    buttonAnimation(event.key);
}

function handleClick() {
    playAudio(this.textContent);
    buttonAnimation(this.textContent);
}

function playAudio(drumKey){
    switch (drumKey) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Button clicked (\"" + this.textContent + "\") does not have a sound...");
            break;
    }
}

function buttonAnimation(drumKey) {
    var activeButton = document.querySelector("." + drumKey);

    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
