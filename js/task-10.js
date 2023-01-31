function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");

createBtnEl.addEventListener("click", handleCreateBtnClick);
destroyBtnEl.addEventListener("click", handleDestroyBtnClick);

function handleCreateBtnClick() {
  console.log(Number(controlsEl.firstElementChild.value));

  for (let i = 0; i < Number(controlsEl.firstElementChild.value); i++) {
    let box = document.createElement("div");
    let sizeBox = 30 + i * 10;
    box.setAttribute(
      "style",
      `width: ${sizeBox}px; height: ${sizeBox}px; outline: solid; background-color: ${getRandomHexColor()}`
    );
    boxesEl.appendChild(box);
  }
}

function handleDestroyBtnClick() {
  boxesEl.innerHTML = "";
}
