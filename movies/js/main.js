//natija chiqadi
let result = document.querySelector(".result");

//karta tanasi
let card = (src, name, year, rating, id) => {
  let element =
    `
  <div class="card mx-2 mb-2" style="width:320px !important">
  <img class="card-img-top" src=${src} alt=${name}> 
    <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <div class="card-subtitle mb-2 text-muted">${year}</div>
        <p class="card-text">${rating}</p>
        <div class="d-flex justify-content-between flex-wrap">
            <button class="btn borde border-primary text-primary mb-2 mx-1 px-1">Watch trailer</button>
            <button class="btn border-dark text-black-50 mb-2 mx-1 px-1">More info</button>
            <button class="btn borde border-success text-success mb-2 mx-1 px-1" data-id=${id}>Bookmark</button>
        </div>
    </div>
  </div>
  `
  result.innerHTML += element;
}
let starter = 0;
//card hosil qiluvchi funksiya
let render = (start, array) => {
  result.textContent = "";
  let number = start + 6;
  try {
    if (array.length<6) number=array.length;
  }
  finally{

  }
  for (start; start < number; start++) {
    const src = array[start].ImageURL;
    const name = array[start].Title;
    const year = array[start].movie_year;
    const rating = array[start].imdb_rating;
    const id = array[start].imdb_id;
    card("https://picsum.photos/200/200?random=1", name, year, rating, id);
  }

  starter = start;
}
render(starter, movies);

//next va prev larni ishlatamiz

let isDisable = (number) => {
  if (number != 0) {
    prev.classList.remove("disabled");

  }

  if (number == 0 && !prev.classList.contains("disabled")) {
    prev.classList.add("disabled");
  }
}

let nextpre = (array) => {
  // next eventi 
  let nexter = (arr) => {
    next.addEventListener("click", () => {
      starter;
      isDisable(starter);
      result.textContent = "";
      render(starter, arr)
      next.focus();
    })
  }
  nexter(movies);

  //prev eventi
  let prever = (arr) => {
    prev.addEventListener("click", () => {
      if (starter == 6) {
      }
      else {
        starter -= 12;
        isDisable(starter);
        result.textContent = "";
        render(starter, arr)
        next.focus();
      }
    })
  }
}

nextpre(movies)

//bokmark bo'limi
let bookmarker = document.querySelector(".bookmark");

let bookmarkCreator = (title, id) => {
  let element =
    `
    <div class="d-flex flex-column">
      <div class="text-black mb-2">
        ${title}
      </div>
      <button class="btn btn-danger align-self-end" id=${id} data-id=${id}>Remove</button>
     </div>
  `
  bookmarker.innerHTML += element;
}

let tempus = [];
result.addEventListener("click", (evt) => {
  let id = event.target.dataset.id;
  if (id && !tempus.includes(id)) {
    tempus.push(id);
    let name = event.target.parentNode.parentNode.children[0].textContent;
    bookmarkCreator(name, id);
  }
})

bookmarker.addEventListener("click", () => {
  let id = event.target.dataset.id;
  if (id) {
    event.target.parentNode.remove();
    tempus.splice(tempus.indexOf(id), 1);
  }
})

let searchtext = document.querySelector(".search");

searchtext.addEventListener("input", () => {
  text = searchtext.value;

  if (text.length > 2) {
    let reg = new RegExp(`${text}`, "gi")
    
    let arr = movies.filter((element) => {
      let text=String(element.fulltitle);
      if(reg.test(text)){
        return element;
      }
    }
    )
    console.log(arr);
    starter=0;
    render(starter,arr);
    nextpre(arr);
  }
})

start.addEventListener("input", () => {
    let num=start.value;
    let reg=new RegExp(`${num}`, "gi");
    let arr = movies.filter((element)=>{
      if (reg.test(String(element.imdb_rating))){
        return element;
      }
    })
    console.log(arr);
    starter=0;
    render(starter,arr);
    nextpre(arr);
  }
)
