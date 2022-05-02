let link = "https://jsonplaceholder.typicode.com/users";

let templateCard = (item) => {
  let card = $("#cardTemp").content.children[0].cloneNode(true);
  $(".username", card).textContent = item.name;
  $(".username", card).dataset.id = item.id;
  $(".email", card).textContent = item.email;
  $(".email", card).href = "mailto:" + item.email;
  $(".city", card).textContent = item.address.city;
  $(".company", card).textContent = item.company.name;
  $(".website", card).textContent = item.website;
  $(".website", card).href = "https://" + item.website;
  return card;
}

let templatePost = (item) => {
  let post = $("#cardTemp").content.children[1].cloneNode(true);
  $(".post_title", post).textContent = item.title;
  $(".post_title", post).dataset.id = item.id;
  $(".post_body", post).textContent = item.body;
  return post;
}

let templateCom = (item)=>{
  let post = $("#cardTemp").content.children[2].cloneNode(true);
  $(".comment_title",post).textContent=item.name;
  $(".comment_mail",post).textContent=item.email;
  $(".comment_mail",post).href="mailto:"+item.email;
  $(".comment",post).textContent=item.body;
  return post;
}

let renderCard = (data) => {
  $(".cards").innerHTML = "";
  data.map(item => {
    $(".cards").appendChild(templateCard(item));
  })
}

let renderPost = (data, dataid) => {
  $(".posts").innerHTML = "";
  $(".post_count").textContent = data.length;
  data.map(item => {
    $(".posts").appendChild(templatePost(item))
  }
  )
}

let renderCom = (obj)=>{
  $(".comments").innerHTML="";
  $(".comments_count").textContent=obj.length;
  obj.map(item=>{
    $(".comments").appendChild(templateCom(item))
  })
}

async function delta(link, output) {
  try {
    const data = await fetch(link);
    const obj = await data.json();
    switch (true) {
      case (output == "card"): {
        renderCard(obj);
        $(".user_count").textContent = obj.length;
      }
        break;
      case (output == "post"): {
        renderPost(obj);
      }
        break;
      case (output == "comment"):{
        renderCom(obj);
      }
      break;
    }
  } catch (err) {
    throw err;
  }
}

delta(link, "card")

$(".cards").addEventListener("click", (evt) => {
  let events = evt.target.dataset.id;
  if (events != undefined) {
    delta(`https://jsonplaceholder.typicode.com/posts/?userId=${events}`, "post")
  }
})

$(".posts").addEventListener("click", (evt) => {
  let postId = evt.target.dataset.id;
  if (postId!=undefined){
    delta(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`,"comment")
  }
})