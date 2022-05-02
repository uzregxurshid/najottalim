let forms = document.querySelector(".form");
let productInput = forms.querySelector(".product-input");
let productSearch = forms.querySelector(".product-search");
let productOutput = forms.querySelector(".outputing");
let deletebtn = forms.querySelector(".delete");
let searchbtn = forms.querySelector(".search");
let products = [];
let productYes = forms.querySelector(".yesno");
let labels = document.querySelectorAll(".form-check-label");
let bigArray = [];

forms.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let CreateElement = (result) => {

    /**
     * form check divider
     */
    let formCheck = document.createElement("div");
    formCheck.classList.add("form-check");

    /**
     * form-check-input
     */
    let formCheckInput = document.createElement("input");
    formCheckInput.classList.add("form-check-input");
    formCheckInput.setAttribute("type", "checkbox");
    formCheck.appendChild(formCheckInput);
    /**
     * form-check-label
     */
    let formCheckLabel = document.createElement("label");
    formCheckLabel.classList.add("form-check-label");
    formCheckLabel.textContent = result;
    formCheck.appendChild(formCheckLabel);
    /**
     * add inline to this
     */
    productOutput.appendChild(formCheck);
  }

  let addProducts = () => {
    /**
     * intialize value
     */
    let myproduct = productInput.value.trim();
    /**
     * detect user error
     */
    if (myproduct == '') {
      productInput.focus();
      return ReferenceError;
    }
    /**
     * add elements to array
     */
    CreateElement(myproduct);
    products.unshift();
    bigArray.unshift(myproduct);
    productInput.value = "";
    productInput.focus();
  }

  addProducts();


})


let deleteProduct = () => {
  deletebtn.addEventListener("click", () => {
    lineThrough();
  })

  let lineThrough = () => {
    let products = forms.querySelectorAll(".form-check");
    let checkboxs = forms.querySelectorAll(".form-check-input");
    for (let i = 0; i < checkboxs.length; i++) {
      if (checkboxs[i].checked == true) {
        products[i].remove();
      }
    }
  }
}
deleteProduct();

searchbtn.addEventListener("click", () => {
  let str = productSearch.value.trim();
  
  if (str == "") {
    return ReferenceError;
  }

  for (let i = 0; i <bigArray.length; i++) {
    if (bigArray[i] ==  str){
      productYes.textContent = "Bor";
    }
    else {
      productYes.textContent = "";
      productInput.value = str;
      productInput.focus();

    }
  }
})