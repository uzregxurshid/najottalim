let slicedMovies = movies.slice(0, 11);


let finalMovies;
let render = (movies = finalMovies) => {
  cards.textContent = "";
  movies.forEach(item => {

    // card
    let CARD = document.createElement('DIV')
    CARD.classList.add('card', 'col-6', 'pt-3')

    // image
    let IMAGE = document.createElement('img')
    IMAGE.width = 400
    IMAGE.height = 180
    IMAGE.classList.add('card-img-top', 'img-fluid')
    IMAGE.src = item.smallThumbnail
    CARD.appendChild(IMAGE)

    // card-body
    let CARDBODY = document.createElement('DIV')
    CARDBODY.classList.add('card-body')

    // movie name
    let MOVIENAME = document.createElement('H4')
    MOVIENAME.classList.add('h4')
    MOVIENAME.textContent = item.title
    CARDBODY.appendChild(MOVIENAME)

    // movie year
    let MOVIEYEAR = document.createElement('H6')
    MOVIEYEAR.classList.add('h6')
    MOVIEYEAR.textContent = item.year
    CARDBODY.appendChild(MOVIEYEAR)

    // movie rating
    let MOVIERATING = document.createElement('H6')
    MOVIERATING.classList.add('h6')
    MOVIERATING.textContent = item.imdbRating
    CARDBODY.appendChild(MOVIERATING)

    // movie categories
    let CATEGORIES = document.createElement('H6')
    CATEGORIES.classList.add('h6')
    CATEGORIES.textContent = item.categories.join(', ').toLowerCase()
    CARDBODY.appendChild(CATEGORIES)

    // trailer
    let TRAILER = document.createElement('a')
    TRAILER.classList.add('btn', 'btn-primary', 'btn-small')
    TRAILER.textContent = 'Trailer'
    TRAILER.target = '_blank'
    TRAILER.href = 'https://youtube.com/watch?v=' + item.youtubeId
    CARDBODY.appendChild(TRAILER)

    // more info
    let MORE = document.createElement('a')
    MORE.classList.add('btn', 'btn-success', 'text-nowrap', 'btn-small', 'mx-2')
    MORE.id = 'modalOpener';
    MORE.textContent = 'More Info'
    MORE.dataset.target = item.imdbId;
    CARDBODY.appendChild(MORE)

    // bookmark
    let BOOKMARK = document.createElement('a')
    BOOKMARK.classList.add('btn', 'btn-secondary', 'btn-small')
    BOOKMARK.textContent = 'Bookmark'
    BOOKMARK.dataset.id = item.imdbId;
    CARDBODY.appendChild(BOOKMARK)

    // add body to card
    CARD.appendChild(CARDBODY)

    cards.appendChild(CARD)
  })
}
search.addEventListener('click', e => {

  cards.innerHTML = ''

  // search pattern
  let pattern = new RegExp(`${movieName.value}`, 'gi')

  // filter by movie name
  finalMovies = movies.filter(item => pattern.test(item.title))

  // filter by rating
  let ratingScale = Number(rating.value) ? Number(rating.value) : 0

  if (ratingScale >= 0 && ratingScale <= 10) {
    finalMovies = finalMovies.filter(e => e.imdbRating >= ratingScale)
  } else {
    alert("To'g'ri qiymat kiriting!")
    return
  }




  result.textContent = finalMovies.length



  render();

})

category.addEventListener("input", (e) => {
  // filter by category
  if (finalMovies == undefined) {
    result.textContent = 0;
    return
  }
  let renderMovies = finalMovies.slice();
  let movieCategory = category.value
  if (movieCategory == "All") {
    renderMovies = renderMovies;
  }
  else {
    if (movieCategory) {
      renderMovies = renderMovies.filter(e => e.categories.includes(movieCategory))
    }
  }
  result.textContent = renderMovies.length

  render(renderMovies)
})

selectType.addEventListener("input", (e) => {
  let select = selectType.value;
  if (finalMovies === undefined) {
    return;
  }
  switch (true) {
    case (select == "ratingup"): {
      render(finalMovies.sort((a, b) => b.imdbRating - a.imdbRating))
    }
    break;
    case (select == "ratingdown"): {
      render(finalMovies.sort((b, a) => b.imdbRating - a.imdbRating))
    }
    break;
    case (select =="yearup"): {
      render(finalMovies.sort((a, b) => b.year - a.year))
    }
    break;
    case (select == "yeardown"): {
      render(finalMovies.sort((b, a) => b.year - a.year))
    }
    break;
    default : {
      render(); break;
    }
  }
})



let bookmarked = [];
cards.addEventListener("click", () => {
  let id = event.target.dataset.id;
  if (!bookmarked.includes(id) && id) {
    bookmarked.unshift(event.target.dataset.id);

    //tanasi
    let flex = document.createElement("div");
    flex.classList.add("d-flex", "flex-column");
    flex.textContent = event.target.parentNode.childNodes[0].textContent;

    //button
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "align-self-end");
    btn.textContent = "Delete";
    btn.dataset.id = id;
    flex.appendChild(btn);
    bookmark.appendChild(flex);
  }
})

cards.addEventListener("click", () => {
  let id = event.target.dataset.target
  if (id) {
    let item = finalMovies.filter(item => item.imdbId == (id))
    console.log(item)
    let element = `
    <div id="mymodal" class="modal" tabindex="-1" role="dialog" style="display:block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${item[0].title}</h5>
        </div>
        <img src=${item[0].bigThumbnail}> 
        <div class="modal-body">
        <p><b>Category: </b> ${item[0].categories.join(", ")}
        <br><b>Imdb Rating: </b> ${item[0].imdbRating}
        <br><b>Year: </b> ${item[0].year}
        <br><b>Language: </b> ${item[0].language}
        <br><b>Time: </b> ${item[0].runtime} minutes
        </p>  

        <p>${item[0].summary}</p>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="console.log(this.parentNode.parentNode.parentNode.parentNode.remove())">Close</button>
        </div>
      </div>
    </div>
  </div>
    `
    event.target.outerHTML += element;
  }
})

bookmark.addEventListener("click", (evt) => {
  let id = event.target.dataset.id;
  if (id) {
    event.target.parentNode.remove();
    bookmarked.splice(bookmarked.indexOf(id));
  }
})

