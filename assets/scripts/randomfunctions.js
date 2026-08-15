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

//Changes the way the games on the "Steam games I own" section are sorted.

function sortMethod(sortType) {
  var steamFrame = document.getElementById("steamgames-iframe");
  steamFrame.src =
    "https://dani-backend-apis.onrender.com/website/steamgames?sort=" +
    sortType;
}

function randomPikminSound() {

  const random = Math.random()

    if (random <= 0.25) {
        playSound("rockPikmin1", true)
    }

    if (random > 0.25 && random <= 0.5) {
        playSound("rockPikmin2", true)
    }

    if (random > 0.5 && random <= 0.75) {
        playSound("rockPikmin3", true)
    }

    if (random > 0.75) {
        playSound("rockPikmin4", true)
    }

}
