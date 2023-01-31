const nameEl = document.querySelector("#name-output");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", onInput);
function onInput(event) {
  nameEl.textContent = event.currentTarget.value;
}
