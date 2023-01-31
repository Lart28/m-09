const formEl = document.querySelector(".login-form");
const alertMsg = "Всі поля повинні бути заповнені";

formEl.addEventListener("submit", handleSubmit);
function handleSubmit (event) {
  const formElements = event.currentTarget.elements;
  event.preventDefault();
  if ((formElements.email.value === "") || (formElements.password.value === "")) {
    alert(alertMsg);
  }
  const formData = { Email: formElements.email.value, Password: formElements.password.value};
  console.log(formData);
  event.currentTarget.reset();
}
