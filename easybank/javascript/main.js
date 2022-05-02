const button = document.getElementById("toggle");
const a = document.getElementsByClassName("header__navbar")
const b = document.getElementsByClassName("header__toggle--open")
button.addEventListener("click", function () {
  const c = document.getElementsByClassName("header__navbar")[0].style.display;
  console.log(c)
  if (c == "" || c == "none") {
    a[0].style.display = "flex";
    b[0].style.marginLeft = "-30px"
  } else {
    a[0].style.display = "none";
    b[0].style.marginLeft = "13px"
  }
})