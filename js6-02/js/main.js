let CAR_SPEED = 50;
let WALK_SPEED = 9;
let DISTANCE;
let forms = document.querySelector(".form");
DISTANCE = forms.querySelector(".mynumber");
let mashina = forms.querySelector(".mashinada");
let piyoda = forms.querySelector(".piyoda");


forms.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let distance = +DISTANCE.value.trim();
  let time;

  if (mashina.checked == true) {
    time = Math.round(distance / (CAR_SPEED / 3.6));
  } else {
    time = Math.round(distance / (WALK_SPEED / 3.6));
  }

  let hour = 0;
  let minute = 0;
  let second = 0;

  hour = parseInt(time / 3600, 10);
  time = time - hour * 3600;
  minute = parseInt(time / 60, 10);
  time = time - minute * 60;
  second = time;

  forms.querySelector(".content").textContent = ` ${hour} soat ${minute} daqiqa  ${second} soniya `;

})