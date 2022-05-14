const warningText = document.querySelector("#warningText"),
  inp = document.querySelector("#inp");

const setErrorText = () => {
  warningText.innerHTML = "Enter lowercase alphabets only";
};

const delErrorText = () => {
  setTimeout(() => {
    warningText.innerHTML = "";
  }, 2000);
};
inp.addEventListener("animationstart", () => setErrorText());
inp.addEventListener("animationend", () => delErrorText());
