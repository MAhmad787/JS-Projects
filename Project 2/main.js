const song = document.getElementById("song");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const playImg = document.getElementById("playing");
const muteImg = document.getElementById("paused");
play.addEventListener("click", () => {
  playImg.style.display = "block";
  muteImg.style.display = "none";
  song.play();
});
pause.addEventListener("click", () => {
  muteImg.style.display = "block";
  playImg.style.display = "none";
  song.pause();
});
