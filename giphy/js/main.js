//
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
    intervalId=setInterval(fnc, 300)
    $(".loader").style.display="flex";
  }
  else {
    clearInterval(intervalId);
  $(".loader").style.display="none";
}
}
animate();

//elementlar
let form = $(".form");
let search = $(".search");
let limit = $(".limit")
let selector = $(".select")

let linkgen = (key, text) => `https://api.giphy.com/v1/gifs/${key}?api_key=oBzBJW8OuyTJvsChy3ym39z6xKKCCyN6${text}`;

let templateGen=(item)=>{
  let template=$("#cards").content.cloneNode(true)
  let src=item.images.original
  $(".video", template).src=src.mp4;
  $(".video", template).dataset.link=src.url;
  return template;
}

let render=(data)=>{
  let gifs=$(".gifs");
  gifs.textContent="";
  if (typeof data == Object){
    gifs.appendChild(templateGen(data))
  }
  else {
    data.forEach(item=>{
      gifs.appendChild(templateGen(item))
      animate()
    })
  }
  
}

let fetching = (link) => {
  fetch(link)
    .then(resp => resp.json())
    .then(res => render(res.data))
}

selector.addEventListener("input", () => {
  if (selector.value == "search")
    search.setAttribute("required", "required");
  else
    search.removeAttribute("required")
})

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let query = search.value.trim().split(" ").join("+");
  let limitation = parseInt(limit.value.trim());
  let select = selector.value;
  let text;
  let key;
  switch (true) {
    case (select == "search"): {
      text = `&q=${query}&limit=${limitation}&offset=0&rating=g&lang=en`;
      key = "search";
    }
    break;
  case (select == "trend"): {
    text = `&limit=25&rating=g`;
    key = "trending";
  }
  break;
  case (select == "rand"): {
    text = `&tag=${query}&rating=g`
    key = "random";
  }
  break;
  }
  animate(true)
  fetching(linkgen(key, text));
})

$(".gifs").addEventListener("click", (evt)=>{
  let data=evt.target.dataset.link;
  if (data!=undefined)
  {
    navigator.clipboard.writeText(data);
    alert("Gif link copied to clipboard")
  }

})