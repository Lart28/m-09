const valueEl = document.querySelector("#value");
let counterValue = 0;
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
plusBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
