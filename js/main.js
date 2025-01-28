const $generatedPassword = document.querySelector(".generated-password");

const $lengthBar = document.querySelector("#length");
const $selectedLength = document.querySelector(".selected-length");

const $checkboxUppercase = document.querySelector("#uppercase");
const $checkboxLowercase = document.querySelector("#lowercase");
const $checkboxNumbers = document.querySelector("#numbers");
const $checkboxSymbols = document.querySelector("#symbols");

const $strengthIndicator = document.querySelector(".strength-indicator");
const $indicator = document.querySelectorAll(".indicator");

const $submitBtn = document.querySelector("button");

console.log($generatedPassword);
console.log($lengthBar);
console.log($selectedLength);
console.log($checkboxUppercase);
console.log($checkboxLowercase);
console.log($checkboxNumbers);
console.log($checkboxSymbols);
console.log($strengthIndicator);
console.log($indicator);

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
  $generatedPassword.textContent = "Generated Password";

  $selectedLength.textContent = $lengthBar.value;

  $strengthIndicator.textContent = "Too Weak";

  $indicator.forEach((indicator) => {
    indicator.style.display = "none";
    if (indicator.classList.contains("indicator-1")) {
      indicator.style.display = "block";
    }
  });
});

$checkboxUppercase.addEventListener("change", (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    Math.random();
  }
});

$lengthBar.addEventListener("input", (e) => {
  $selectedLength.textContent = e.target.value;
  console.log(e.target.value);
});

$submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit!");
});
