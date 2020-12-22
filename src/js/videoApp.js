import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "../plugins/autoPlay.js"

const button = document.getElementById(`playButton`);
const video = document.querySelector(`video`);
const buttonMute = document.querySelector(`#unmuteMute`);

const player = new MediaPlayer({ el:video, plugins:[
    new AutoPlay()
]});
button.onclick = () => player.play();
/* buttonMute.onclick = () => player.unmuteMute(); */
buttonMute.onclick = () => player.toggleMute();
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