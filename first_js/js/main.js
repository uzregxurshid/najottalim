const person = {
  firstName: prompt("Ismingiz", "Xurshid").trim(),
  lastName: prompt("Familiyangiz", "Aliyarov").trim(),
  telNumber: prompt("Telefon raqamingiz: ", "+998912332966").trim(),
  emailAddress: prompt("Email manzilingiz", "uzregxurshid@gmail.com").trim(),
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

document.getElementById("name").innerHTML = person.fullName();
document.getElementById("names").innerHTML = person.fullName();
document.getElementById("tel").innerHTML = person.telNumber;
document.getElementById("email").innerHTML = person.emailAddress;

function PictureChanger() {
  let x = person.lastName.endsWith("va");
  if (x == true) {
    document.getElementById("female").setAttribute("style", "display: block !important")
    document.getElementById("male").setAttribute("style", "display: none !important")
  } 

}
PictureChanger();