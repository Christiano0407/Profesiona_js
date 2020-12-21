//PRIMERA SOLUCIÓN:
/* button.addEventListener(`click`, function(){
console.log(`Click`);
}); */
export default function MediaPlayer(config){
    this.media = config.el;
    }
     MediaPlayer.prototype.play = function(){
        if(this.media.paused){
            this.media.play();
        }else {
            this.media.pause();
        }
    }