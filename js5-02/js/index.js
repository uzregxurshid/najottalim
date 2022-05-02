var MINIMUM_PASS_SCORE = 97.5;

var MIN_GRAND_SCORE=111;

var MINUMUM_SUPER_CONTACT_SCORE = 77;

var elDtmForm = document.querySelector(".dtm-form");
var elDtmScore = elDtmForm.querySelector(".dtm-score");
var elDtmCheckbox = elDtmForm.querySelector(".dtm-checkbox");
var elDtmResult = document.querySelector(".dtm-result");


elDtmForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  



  var resultText;
  var resultState;
  var isDtmChecked = elDtmCheckbox.checked;

  var score = parseFloat(elDtmScore.value.trim(), 10);
  
  if (score<0){
    alert("0 dan katta son kiriting");
    elDtmScore.value=null;
  }
  else
  if (score>189){
    alert("189 dan kichik son kiriting");
    elDtmScore.value=null;
  }
  else
  if (score >= MIN_GRAND_SCORE || isDtmChecked) {
    resultText = `Muborakbot etamiz, siz talabalikka budjet asosida tavsiya qilindingiz`;
    resultState = `success`;
  } 
  else
  if (score>MINIMUM_PASS_SCORE && score < MIN_GRAND_SCORE){
    resultText = `Muborakbot etamiz, siz talabalikka kontrakt asosida tavsiya qilindingiz`;
    resultState = `success`;
  } 
  else 
    if (
    score >= MINUMUM_SUPER_CONTACT_SCORE &&
    score < MINIMUM_PASS_SCORE
  ) {
    resultText = `Super kontraktga o'qishga kirdingiz`;
    resultState = `warning`;
  } else {
    resultText = `Siz talabalikka tavsiya qilionmadingiz`;
    resultState = `danger`;
  }

  elDtmResult.classList.remove("success", "warning", "danger");
  elDtmResult.textContent = resultText;
  elDtmResult.classList.add(resultState);
});

// grand va kontraktni ajratish;
// - qiymat kiritsa `0 va undan katta qiymat kiriting deb chiqarish`;
// string kiritsa `raqam kiriting`  deb chiqairish;
