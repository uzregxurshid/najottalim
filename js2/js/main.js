let person = {
  age: 0,
  month: 0
}

function details() {
  person.age = parseInt(prompt("Yoshingizni kiriting: ", "0").trim(), 10);
  person.month = parseInt(prompt(`${person.age} yosh-u necha oyliksiz: `, "0").trim(), 10);
}

details();

function detectError() {
  if (person.month > 12 || isNaN(person.age) || isNaN(person.month) || (person.age < 0) || (person.month < 0)) {
    alert("Siz ma'lumotlarni noto\'g\'ri kiritishga urindingiz! \nIltimos tekshirib qaytadan kiriting!");
    window.location.reload();
  }
}

detectError();

function uptoDate() {
  let text;

  if (person.month == 0) {
    text = (18 - person.age) + " yil";
    applyStyle(text);
  } else {
    let tempa = 17 - person.age;
    let tempm = 12 - person.month;

    if (tempm == 12) {
      tempa += 1;
    }
    text = tempa + "yil " + tempm + "oy ";
    console.log(text);
    applyStyle(text);
  }
}

uptoDate();

function applyStyle(waittext) {
  if (person.age < 18) {
    document.getElementById("child").setAttribute("style", "display:flex !important");
    document.getElementById("waittime").textContent = waittext;
  }
  else{
    document.getElementById("hellopeter").setAttribute("style", "display:flex !important");
  }
}

