//buttonlar
let next=$(".next")
let prev=$(".prev")
let page=1;
let pageItem=$$(".page-item")

// linkni qaytaradi
let linkgen =(text,num)=>{
  return `https://www.omdbapi.com/?apikey=f68eea0e&s=${text}&page=${num}`
}

//button disablerlar
let buttons=(link,data)=>{
  let number=Number(link[link.length-1])
  more=Math.ceil(data/10)
 
  switch(true){
    case number<2:{
      pageItem[0].classList.add("disabled")
    }
    break;
    case number>1:{
      pageItem[0].classList.remove("disabled")
    }
  }
  switch(true){
    case (number==more):{
      pageItem[1].classList.add("disabled")
    }
    break;
    case number!=more:{
      pageItem[1].classList.remove("disabled")
    }
    break;
  }
}



//api bilan ishlash uchun
let fetching = (link)=> 
{
  fetch(link)
  .then(resp =>resp.json())
  .then(data => {
    render(data.Search)
    buttons(link, data.totalResults)
    if (data.totalResults==undefined)
     {
      pageItem[1].classList.add("disabled")
     }
    $(".count").textContent = data.totalResults;
    animate(false);
  })
}

//templateni generatsiya qiladi
temGen = (item) => {
  let tem = $("#card").content.cloneNode(true)
  datas = $$(".tdata", tem);
  datas[0].src = item.Poster;
  datas[1].textContent = item.Title;
  datas[2].textContent = item.Year;
  datas[3].dataset.id = item.imdbID;
  return tem;
}

//cardlarni chiqarib beradi
render = (data) => {
let cards=$(".cards")
cards.textContent=""
  if (data!=undefined){
    data.forEach(element => {
      cards.appendChild(temGen(element))
    });
  }
}


//qidiruvni ishlatadi
let form=$(".form")
searchText=$(".searchtext")
form.addEventListener("submit", (evt)=>{
  evt.preventDefault()
  let supertext=searchText.value.trim();
  if (supertext.length>2){
     let link=linkgen(supertext,1);
    fetching(link)
    animate(true)
  }
})

next.addEventListener("click", ()=>{
  animate(true)
  fetching(linkgen(searchText.value.trim(),++page))
})


prev.addEventListener("click", ()=>{
  animate(true)
  fetching(linkgen(searchText.value.trim(),--page))
})

$(".cards").addEventListener("click", ()=>{
  let id=event.target.dataset.id;
  if (id!=undefined){
    let link= (value) => `https://www.omdbapi.com/?apikey=ea5edfcd&i=${value}`;
    fetch(link(id))
    .then(resp=>resp.json())
    .then(res=>console.log(res))
  }
})