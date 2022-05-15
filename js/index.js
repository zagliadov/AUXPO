const warningText = document.querySelector("#warningText"),
  inp = document.querySelector("#inp");

const setErrorText = (e) => {
  let reg = /[0-9]/g;
  if(reg.test(e.target.value)) {
    warningText.innerHTML = "Enter lowercase alphabets only";
  } else {
    warningText.innerHTML = "";
  }
  
};

inp.addEventListener("input", (e) => setErrorText(e));
