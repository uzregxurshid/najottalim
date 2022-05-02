function t(){
  let form=document.querySelector(".form");
let number=parseInt(form.querySelector(".mynumber").value.trim(),10);
let text=form.querySelector(".myarea");
let result = (number % 3 == 0 && number % 5 == 0) ? "FizzBuzz": ( (number % 5 == 0)? "Fizz": (number % 3 == 0 ? "Buzz": number))
text.textContent=result;
}