let x = document.querySelector(".form");
let myquery=document.querySelector(".container-fluid");
x.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let fname = x.querySelector("#fname").value;
  let lname = x.querySelector("#lname").value;
  let tdate = x.querySelector("#tdate").value;
  x.setAttribute("style","display: none !important");
  var element=document.createElement("div");
  element.classList.add("h1");
  // element.appendChild(document.createTextNode("Hello"));
  element.textContent=`${fname} ${lname} ${tdate}`;
  myquery.appendChild(element); 
  
})
