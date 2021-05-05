const contain = document.querySelector(".container");
const image = document.querySelector(".img");
const slider = document.querySelector(".slider");
function changeSize() {
  image.style.width = slider.value + "%";
}
slider.addEventListener("onclick", changeSize);
