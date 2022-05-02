let contact = [];

//selectorlar
let forms = $(".form")
let name = $(".name", forms)
let phone = $(".phone", forms)
let loc = $(".location", forms)
let gender = $(".gender", forms)
let relation = $(".relation", forms)

//form listener
forms.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let element = {
    name: name.value.trim(),
    phone: phone.value.trim(),
    loc: loc.value.trim(),
    gender: gender.value,
    relation: relation.value
  }
  if (!contact.some(el=>el.phone==element.phone)||contact.length==0) contact.push(element);
  if (localStorage.getItem("contacts")==null){
    localStorage.setItem("contacts", JSON.stringify(contact))
  }
  else {
    contact=JSON.parse(localStorage.getItem("contacts"))
    contact.push(element)
    console.log(contact)
    localStorage.setItem("contacts", JSON.stringify(contact))
  }
  renderContact();
})

let x = (min,max)=> Math.floor(Math.random()*(max-min+1))+min;
//template gen
let template = (item) => {
  let template = $("#card").content.cloneNode(true);
  $(".card-name", template).textContent = item.name;
  $(".card-family", template).textContent = item.relation;
  $(".mylocation", template).textContent = item.loc;
  $(".number", template).textContent = item.phone;
  if (item.gender=="female"){
    $(".avatar", template).src=`./img/female${x(1,2)}.png`;
  }
  else {
    $(".avatar", template).src=`./img/male${x(1,5)}.png`;
  }
  return template;
}

//render contacts
renderContact = () => {
  let contacts
  if (localStorage.getItem("contacts")) {
    contacts = localStorage.getItem("contacts");
    contacts = JSON.parse(contacts)
    $(".contactlist").textContent = "";
    contacts.forEach(item => {
      $(".contactlist").appendChild(template(item));
    })
  }
}
renderContact();