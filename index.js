for(var i=0;i<3;i++){
        document.querySelectorAll(".buttons")[i].addEventListener("click",function(){
            var text = this.innerHTML;
            console.log(text)
            playAudio(text);
            playAnimation(text);
            });
}
function playAudio(text){
    switch(text){
        case 'a':
            var audio = new Audio("sound/a.mp3");
            audio.play();
            break;

        case 'b':
            var audio = new Audio("sound/sojib.mp3");
            audio.play();
            break;

        case 'c':
            var audio = new Audio("sound/a.mp3");
            audio.play();
            break;
    }
}
function playAnimation(text){
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");
    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },100);

}
