import MediaPlayer from "./mediaPlayer";

const button = document.getElementById(`playButton`);
const video = document.querySelector(`video`);

const player = new MediaPlayer({ el:video });
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