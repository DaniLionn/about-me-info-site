//Changes the way the games on the "Steam games I own" section are sorted.

function sortMethod(sortType) {
  var steamFrame = document.getElementById("steamgames-iframe");
  steamFrame.src =
    "https://prideislandapi.onrender.com/website/steamgames?sort=" + sortType;
}
