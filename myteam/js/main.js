const button = document.getElementsByClassName("header__toggle")[0];
const a = document.getElementsByClassName("header__navbar")
button.addEventListener("click", function () {
  const c = document.getElementsByClassName("header__navbar")[0].style.display;
  console.log(c)
  if (c == "" || c == "none") {
    a[0].style.display = "flex";
  } else {
    a[0].style.display = "none";
  }
})
const buttonc= document.getElementsByClassName("header__closer")[0];
buttonc.addEventListener("click", function () {
  const c = document.getElementsByClassName("header__navbar")[0].style.display;
  console.log(c)
  if (c == "flex" || c == "none") {
    a[0].style.display = "none";
  }
})