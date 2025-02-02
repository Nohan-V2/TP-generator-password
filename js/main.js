const $generatedPassword = document.querySelector(".generated-password");
const $copyToClipboardBtn = document.querySelector(".copy-to-clipboard-btn");

const $lengthBar = document.querySelector("#length");
const $selectedLength = document.querySelector(".selected-length");

const $checkboxUppercase = document.querySelector("#uppercase");
const $checkboxLowercase = document.querySelector("#lowercase");
const $checkboxNumbers = document.querySelector("#numbers");
const $checkboxSymbols = document.querySelector("#symbols");

const $strengthIndicator = document.querySelector(".strength-indicator");
const $indicatorTooWeak = document.querySelector(".indicator-1");
const $indicatorWeak = document.querySelector(".indicator-2");
const $indicatorMedium = document.querySelector(".indicator-3");
const $indicatorStrong = document.querySelector(".indicator-4");

const $submitBtn = document.querySelector("button");

console.log($generatedPassword);
console.log($copyToClipboardBtn);
console.log($lengthBar);
console.log($selectedLength);
console.log($checkboxUppercase);
console.log($checkboxLowercase);
console.log($checkboxNumbers);
console.log($checkboxSymbols);
console.log($strengthIndicator);
console.log($indicatorTooWeak);
console.log($indicatorWeak);
console.log($indicatorMedium);
console.log($indicatorStrong);
console.log($submitBtn);

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;':,./<>?";

function generatePassword(length) {
  let password = "";
  let characters = "";

  if ($checkboxUppercase.checked) {
    characters += uppercase;
  }

  if ($checkboxLowercase.checked) {
    characters += lowercase;
  }

  if ($checkboxNumbers.checked) {
    characters += numbers;
  }

  if ($checkboxSymbols.checked) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(password);
  $generatedPassword.textContent = password;
}

function strengthPassword(isTrue, range) {
  if ($generatedPassword.textContent === "") {
    $strengthIndicator.textContent = "Undefined";

    $indicatorTooWeak.classList.remove("indicator-too-weak");
    $indicatorWeak.classList.remove("indicator-weak");
    $indicatorMedium.classList.remove("indicator-medium");
    $indicatorStrong.classList.remove("indicator-strong");
  } else if (isTrue === 1 || (range >= 0 && range <= 5)) {
    $strengthIndicator.textContent = "Too Weak";

    $indicatorTooWeak.classList.add("indicator-too-weak");
    $indicatorWeak.classList.remove("indicator-weak");
    $indicatorMedium.classList.remove("indicator-medium");
    $indicatorStrong.classList.remove("indicator-strong");
  } else if (isTrue === 2 || (range >= 6 && range <= 10)) {
    $strengthIndicator.textContent = "Weak";

    $indicatorTooWeak.classList.add("indicator-too-weak");
    $indicatorWeak.classList.add("indicator-weak");
    $indicatorMedium.classList.remove("indicator-medium");
    $indicatorStrong.classList.remove("indicator-strong");
  } else if (isTrue === 3 || (range >= 11 && range <= 15)) {
    $strengthIndicator.textContent = "Medium";

    $indicatorTooWeak.classList.add("indicator-too-weak");
    $indicatorWeak.classList.add("indicator-weak");
    $indicatorMedium.classList.add("indicator-medium");
    $indicatorStrong.classList.remove("indicator-strong");
  } else if (isTrue === 4 || (range >= 16 && range <= 20)) {
    $strengthIndicator.textContent = "Strong";

    $indicatorTooWeak.classList.add("indicator-too-weak");
    $indicatorWeak.classList.add("indicator-weak");
    $indicatorMedium.classList.add("indicator-medium");
    $indicatorStrong.classList.add("indicator-strong");
  }
}

$copyToClipboardBtn.addEventListener("click", () => {
  const password = $generatedPassword.textContent;
  navigator.clipboard.writeText(password);
});

isTrue = 0;

$checkboxUppercase.addEventListener("click", (e) => {
  if (e.target.checked) {
    isTrue += 1;
  } else {
    isTrue -= 1;
  }
  console.log(isTrue);
});

$checkboxLowercase.addEventListener("click", (e) => {
  if (e.target.checked) {
    isTrue += 1;
  } else {
    isTrue -= 1;
  }
  console.log(isTrue);
});

$checkboxNumbers.addEventListener("click", (e) => {
  if (e.target.checked) {
    isTrue += 1;
  } else {
    isTrue -= 1;
  }
  console.log(isTrue);
});

$checkboxSymbols.addEventListener("click", (e) => {
  if (e.target.checked) {
    isTrue += 1;
  } else {
    isTrue -= 1;
  }
  console.log(isTrue);
});

document.addEventListener("DOMContentLoaded", () => {
  $generatedPassword.textContent = "Generated Password";

  $selectedLength.textContent = $lengthBar.value;

  $strengthIndicator.textContent = "Too Weak";
});

$checkboxUppercase.addEventListener("change", (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
  }
});

$lengthBar.addEventListener("input", (e) => {
  $selectedLength.textContent = e.target.value;
  console.log(e.target.value);
});

$submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit!");

  generatePassword($lengthBar.value);

  strengthPassword(isTrue, $lengthBar.value);

  console.log(strengthPassword());
});
