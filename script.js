score = 0;
cross = true;

audio = new Audio(music.mp3);
audiofo = new Audio(gameover.mp3);

setTimeout(() => {
    audio.play();
}, 1000)