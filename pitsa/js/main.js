let PIZZAS_SIZE = [
  "kichkina",
  "o'rtacha",
  "katta"
]

let PIZZAS_MEAT = [
  "ot go'shtli",
  "mol go'shtli",
  "kurka go'shtli"
]

let PIZZAS_EXTRA_PACKAGE = [
  "chili sousli",
  "oddiy sousli",
  "mayonezli"
]

let PIZZAS = [
  {
    id: 0,
    name: "Oq nonli",
    src: "./img/non1.webp",
    checked: false
  },

  {
    id: 1,
    name: "Pishloq nonli",
    src: "./img/non2.webp",
    checked: false
  },
  {
    id: 2,
    name: "Sutli nonli",
    src: "./img/non3.webp",
    checked: false
  },
  {
    id: 3,
    name: "Pizyozli nonli",
    src: "./img/non4.webp",
    checked: false
  },
  {
    id: 4,
    name: "Bo'lka nonli",
    src: "./img/non5.webp",
    checked: false
  },
  {
    id: 5,
    name: "Qandaydir nonli",
    src: "./img/non6.webp",
    checked: false
  }
]

let root = document.querySelector(".root");

let colrows = () => {
  let element =
    `
    <div class="col-3 d-flex flex-wrap justify-content-center row1">

    </div>
  
    <div class="col-6 row">
        <div class="border border-primary bg-primary bg-opacity-25 row21 my-2 d-flex justify-content-center align-items-center ">
         
        </div>
        <div class="border border-warning bg-warning bg-opacity-25 row22 my-2 d-flex justify-content-center align-items-center">
         
        </div>
        <div class="border border-danger bg-danger bg-opacity-25 row23 my-2 d-flex justify-content-center align-items-center">
         
        </div>
    </div>

    <div class="col-3 row d-flex flex-column">
      <p class="text-center">Sizning pitsangiz</p>
      <div class="bg-primary bg-opacity-25 rounded border border-primary row ms-5 w-75 p-3 output1"></div> 
      <button type="submit" class="btn btn-success ms-5 mt-5 w-50">Buyurtma</button>
      <small id="helpId" class="form-text text-muted ms-4 mt-3"> </small>
    </div>
      `
  root.innerHTML = element;
}


colrows();

let row1 = root.querySelector(".row1");


let createPizzaBolka = (src, id, name) => {
  let element =
    `
  <label class="my-3 col-6" data-id=${id} style="cursor:pointer">
  <input type="radio" class="form-check-input visually-hidden" name="non" id="non" value=${name}>
  <img class="img-fluid" src=${src} alt=${name} data-id=${id} style="width:90px !important">
  </label>

  `
  row1.innerHTML += element;
}


for (let index = 0; index < PIZZAS.length; index++) {
  const src = PIZZAS[index].src;
  const id = PIZZAS[index].id;
  const name = PIZZAS[index].name;
  createPizzaBolka(src, id, name);
}

let row21 = root.querySelector(".row21");
let row22 = root.querySelector(".row22");
let row23 = root.querySelector(".row23");

let extras = ( btnc,id, names, row, defines, type) => {
  let element =
    `
    <div class="form-check">
    <label class="form-check-label btn ${btnc}">
      <input type=${type} class="form-check-input visually-hidden" data-id=${id} name=${defines} id=${defines} value=${names}>
      ${names}
    </label>
  </div>

  `

  row.innerHTML += element;
}

for (let i = 0; i < PIZZAS_SIZE.length; i++) {
  const element = PIZZAS_SIZE[i];
  const element2 = PIZZAS_MEAT[i];
  extras("btn-primary" ,i, PIZZAS_SIZE[i], row21,"size", "radio");
  extras( "btn-warning",i, PIZZAS_MEAT[i], row22,"meat", "checkbox");
  extras( "btn-danger",i, PIZZAS_EXTRA_PACKAGE[i], row23,"sous", "checkbox");
}


//pitsani tanlaymiz
let pizzapoutput = root.querySelector(".output1");
let pizza = [
  [undefined,undefined,undefined],
  [undefined,undefined,undefined],
  [undefined,undefined,undefined],
  [undefined,undefined,undefined]
];





let text = (array)=>{
  let temp="";
  for (let index = 0; index < array.length; index++) {
   for (let indext = 0; indext < array[index].length; indext++) {
     const element = array[index][indext];
     if (element!=undefined)
     temp+=element+"  ";
     
   }
  }
  return temp;
}
console.log(text(pizza));
row1.addEventListener("click", (evt) => {
  let index = event.target.dataset.id;
  if (index) {
    pizza[0][0] = PIZZAS[index].name;
    pizzapoutput.textContent='';
    pizzapoutput.textContent=text(pizza)+" pitsa";
  }
})
 
let idFind = (rownumber, arr, index) => {
  rownumber.addEventListener("click", () => {
    let myindex = event.target.dataset.id;
    if (myindex && index==1) {
    pizza[1][0]=arr[myindex];
    pizzapoutput.textContent='';
    pizzapoutput.textContent=text(pizza)+" pitsa";

  }
    if (myindex&&index>1){
      if (pizza[index][myindex]==arr[myindex]){
        pizza[index][myindex]=undefined;
        pizzapoutput.textContent='';
    pizzapoutput.textContent=text(pizza)+" pitsa";
      }
      else{
        pizza[index][myindex]=arr[myindex];
        pizzapoutput.textContent='';
    pizzapoutput.textContent=text(pizza)+" pitsa";
      }
    
    }
  });
} 

idFind(row21, PIZZAS_SIZE, 1);
idFind(row22, PIZZAS_MEAT, 2);
idFind(row23, PIZZAS_EXTRA_PACKAGE, 3);

root.addEventListener("submit", (evt)=>{
  if (pizza.length!=4){
    evt.preventDefault();
    helpId.textContent="Pitsani to'liq buyurtma qiling";
  }
  else{
    helpId.textContent="";
  }
}) 