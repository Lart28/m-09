const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sliderEl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textEl.setAttribute('style', `font-size: ${event.currentTarget.value}px`);

}
