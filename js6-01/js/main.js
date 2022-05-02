let forms = document.querySelector(".form");
let myoutput = forms.querySelector(".output");
let input = forms.querySelector(".input");

forms.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let checkbox = () => {
    let mytextcontent = forms.querySelector(".input").value.trim();
    let formcheck = document.createElement('div');
    formcheck.classList.add("form-check");
    let label = document.createElement("label");
    label.classList.add("form-check-label", "text-primary");
    let chbox = document.createElement("input");
    chbox.setAttribute("type", "checkbox");
    chbox.classList.add("form-check-input");
    label.textContent = mytextcontent;
    formcheck.appendChild(chbox);
    formcheck.appendChild(label);

    if (mytextcontent == "") {
      return ReferenceError;
    }

    return myoutput.appendChild(formcheck);

  }

  checkbox();
  input.value = "";
  input.focus();

})