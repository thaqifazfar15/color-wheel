const colorWheel = document.querySelector("#color");
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  colorWheel.value = defaultColor;
  colorWheel.addEventListener("input", updateFirst, false);
  colorWheel.select();
}

function updateFirst(event) {
  const colorContainer = document.querySelector(".color-container");
  const para = document.querySelector(".paragraph");
  colorContainer.style.backgroundColor = event.target.value;
  para.style.color = event.target.value;
}
