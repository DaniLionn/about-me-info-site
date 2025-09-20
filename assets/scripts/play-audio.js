//Plays audio with an optional random speed mode.

function playSound(id, doRandomSpeed) {
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  var audio = document.getElementById(id);

  if (audio) {
    if (doRandomSpeed == true) {
      audio.playbackRate = randomNumber(0.5, 1.5);
    }

    audio.play();
  }
}
