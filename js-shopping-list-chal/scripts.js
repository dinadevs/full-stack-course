const input = document.getElementById("itemInput");
const form = document.getElementById("shoppingForm");

input.addEventListener("input", () => {
  const hasNumbersRegex = /\d+/g;
  input.value = input.value.replace(hasNumbersRegex, "");
});

form.onsubmit = (e) => {
  Event.preventDefault();

};

