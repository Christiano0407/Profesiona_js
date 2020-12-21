const button = document.getElementById(`playButton`);
const video = document.querySelector(`video`);

//PRIMERA SOLUCIÓN:
/* button.addEventListener(`click`, function(){
console.log(`Click`);
}); */
function MediaPlayer(){}
MediaPlayer.prototype.play = function(){
    video.play();
}
const player = new MediaPlayer();
button.onclick = () => player.play();
/* button.onclick = () => video.play(); */

//SEGUNDA SOLUCIÓN:
/*  button.addEventListener(`click`, handlePlayButton, false);

playVideo();

async function playVideo(){
    try {
        await video.play();
        button.className = "playing";
    }catch(err){
        button.className ="";
    }
}

function handlePlayButton(){
    if(video.paused){
        playVideo();
    }else {
        video.pause();
        button.className = "";
    }
} */