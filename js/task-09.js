function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener('click', changeColorHandle)

function changeColorHandle (event) {
  bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()}`);
  spanEl.textContent = bodyEl.style.backgroundColor;
}

