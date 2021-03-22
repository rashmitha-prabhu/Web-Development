var button = document.querySelectorAll(".drum");

function addSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function btnHighlight(key){
    btn = document.querySelector('.'+key);
    btn.classList.add('pressed');
    setTimeout(function(){btn.classList.remove('pressed');}, 100);
    
}

for(i=0; i<=button.length; i+=1){
	button[i].addEventListener("click", function(){
        var btnInner = this.innerHTML;
        addSound(btnInner);
        btnHighlight(btnInner);
    });

    button[i].addEventListener("keydown", function(event){
        addSound(event.key);
        btnHighlight(event.key);
    });
}