//PRIMERA SOLUCIÓN:
/* button.addEventListener(`click`, function(){
console.log(`Click`);
}); */
 function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    //método de inicializar:
    this._initPlugins();
    }
    MediaPlayer.prototype._initPlugins = function(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }
              //PLAY
    MediaPlayer.prototype.play = function(){
        if(this.media.paused){
            this.media.play();
        }else {
            this.media.pause();
        }
    }
              //MUTE
    MediaPlayer.prototype.mute = function(){
        this.media.muted = true;
    }
     MediaPlayer.prototype.unmute = function(){
        this.media.muted = false;
    } 
    MediaPlayer.prototype.toggleMute = function(){
        this.media.muted 
        ? this.unmute()
        : this.mute();
    }

              //otro ejemplo:
 /*    MediaPlayer.prototype.unmuteMute = function(){
      if(this.media.muted){
          this.media.muted = false
      }else {
          this.media.muted = true;
      }
    } */
export default MediaPlayer;