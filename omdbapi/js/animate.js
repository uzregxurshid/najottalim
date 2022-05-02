$(".loader").style.display="flex";
let circles = $$(".circle")
let colors = [
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#fab1a0"
]
let fnc=()=>{
  circles[count].style.backgroundColor=colors[count];
  count++;
  if (count == 5) {
    count = 0;
    let element=colors.pop();
    colors.unshift(element)
  }
}
let count = 0;
let intervalId=setInterval(fnc, 300)

animate = (stop) => {
  if (stop) {
    console.log(intervalId)
    intervalId=setInterval(fnc, 300)
    $(".loader").style.display="flex";
  }
  else {
    clearInterval(intervalId);
  $(".loader").style.display="none";
}
}