const gatell = document.getElementById("gatell");

window.onload = function () {
  if (getRandomInt(1, 2) === 1) gatell.className = "cabezaSpin";
  else gatell.className = "cabezaSpin2";
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playQuedateEnCasa() {
  const quedateEnCasa = document.getElementById("quedateEnCasa");

  const oyepPapi = document.getElementById("oyePapi");

  if (getRandomInt(1, 2) === 1) quedateEnCasa.play();
  else oyepPapi.play();
}

gatell.addEventListener("click", playQuedateEnCasa);
