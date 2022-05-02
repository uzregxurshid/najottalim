let badge = document.querySelector(".mybadge");
let showPokemons = document.querySelector(".showpoke");
let rootElement = document.querySelector(".root");


//Sahifaga chiqarib beruvchi funksiya
let pocemonCardCreator = function (src, name, type, height, weight, index) {
  //card tanasi
  let card = document.createElement("div");
  card.classList.add("card", "bg-dark", "bg-opacity-25", "m-2");
  card.setAttribute("style", "width:280px");


  //card rasmi
  let img = document.createElement("img");
  img.classList.add("card-img-overlay", "mx-auto");
  img.setAttribute("src", src);
  img.setAttribute("alt", name);

  card.appendChild(img);

  //card tanasi 
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.setAttribute("style", "margin-top:150px !important;")

  card.appendChild(cardBody)


  //card title qismi
  let h5 = document.createElement("h5");
  h5.classList.add("card-title", "text-light", "text-center", "text-uppercase");
  h5.textContent = name;

  cardBody.appendChild(h5);


  //custom ability uchun rasmlar 
  let customImg = function (element) {
    return `./img/${element.toString().toLocaleLowerCase()}.svg`
  }

  //card text qismi va span qismi
  let p = document.createElement("p");
  p.classList.add("card-text", "mb-2");
  p.textContent = "Type: ";

  //span qismi
  let span = document.createElement("span");
  let newspan = document.createElement("span");
  let oldspan = document.createElement("span")
  span.classList.add("element");


  //type imglarni chaqirish
  for (let tip = 0; tip < 1; tip++) {
    newspan.textContent += type[tip];
    let image = document.createElement("img");
    image.setAttribute("src", customImg(type[tip]));
    image.setAttribute("style", "width: 22px; height: 22px;");
    image.setAttribute("alt", tip);
    image.classList.add("mx-2");
    span.appendChild(newspan)
    span.appendChild(image);
  }

  //type imglarni chiqarish
  for (let tip = 1; tip < 2; tip++) {
    if (type.length == 2) {
      let image = document.createElement("img");
      image.setAttribute("src", customImg(type[tip]));
      image.setAttribute("style", "width: 22px; height: 22px;");
      image.setAttribute("alt", tip);
      image.classList.add("mx-2");
      oldspan.textContent = type[1];
      span.appendChild(oldspan);
      span.appendChild(image);
    }
  }

  p.appendChild(span);
  cardBody.appendChild(p);

  //height qismi:
  let up = document.createElement("p");
  up.classList.add("mb-2", "card-text");
  up.textContent = "Height: ";
  up.textContent += height;
  cardBody.appendChild(up);

  //weight qismi:
  let weights = document.createElement("p");
  weights.classList.add("mb-2", "card-text");
  weights.textContent = "Weight: ";
  weights.textContent += weight;
  cardBody.appendChild(weights);

  //like button 
  let likeButton = document.createElement("button");
  likeButton.classList.add("btn", "btn-primary");
  likeButton.setAttribute("type", "button");
  likeButton.setAttribute("aria-hidden", "true");


  //like img 
  let likeImg = document.createElement("img");
  likeImg.setAttribute("src", "./img/like.svg");
  likeImg.setAttribute("alt", "Like button");
  likeButton.appendChild(likeImg);
  likeButton.dataset.id = index;
  likeImg.dataset.id = index;
  cardBody.appendChild(likeButton);



  return card;

}

console.log(pokemons[0]);


//Drive Code
let drive = function (show) {
  for (let i = 0; i < pokemons.length; i++) {
    let img = pokemons[i].img;
    let name = pokemons[i].name;
    let type = pokemons[i].type;
    let height = pokemons[i].height;
    let weight = pokemons[i].weight;
    rootElement.appendChild(pocemonCardCreator(img, name, type, height, weight, i))
    pokemons[i].liked=false;
  }
}
drive();


//badge render 
let cbadge = function () {
  let counter = 0;

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].liked == true) {
      counter++;
    }
  }
  badge.textContent = "";
  badge.textContent = counter;
}
//like button js
rootElement.addEventListener("click", function () {
  let likeEvent = event.target.dataset.id;
  let temp=pokemons[likeEvent].liked;
  if (likeEvent) {
    pokemons[likeEvent].liked = true;
  }
  if (temp) {
    pokemons[likeEvent].liked = false;
  }
  cbadge();

})

//Tanlab olingan pokemonlarni ko'rsatish
showPokemons.addEventListener("click", function () {
  rootElement.textContent="";
  for (let i = 0; i < pokemons.length; i++) {

    if ( pokemons[i].liked){

    let img = pokemons[i].img;
    let name = pokemons[i].name;
    let type = pokemons[i].type;
    let height = pokemons[i].height;
    let weight = pokemons[i].weight;
    rootElement.appendChild(pocemonCardCreator(img, name, type, height, weight, i))
    
  }
  }
})

