 import "https://vjs.zencdn.net/7.10.2/video.js"

console.log("Play");

ps5.classList.remove(`hidden`);

const player = videojs(`ps5`, {
    controls: true,
    preload: `auto`,
});

export {player}; 