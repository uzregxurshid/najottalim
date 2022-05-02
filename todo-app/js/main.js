let todos = [];
let i = 0;
let form = document.querySelector(".form");

todotext.addEventListener("input", () => {
  current.textContent = todotext.value;
})

let hide= ()=>{
  modalw.classList.toggle("d-block");
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let element;
  if (todotext.value) {
    element = {
      value: todotext.value,
      id: i++,
      isCompleted: false,
      createdtime: new Date().toLocaleTimeString(),
      createddate: new Date().toDateString(),
      isEdited: false,
      oldValue:"",
      editeddate: "",
    }
    todos.push(element);
    todotext.value = "";
    todotext.focus();
    total.textContent = todos.length;
  }

  //todos parent div
  let parentDiv = document.createElement("div");
  parentDiv.classList.add("border", "rounded", "p-2", "mb-2", "d-flex");
  parentDiv.dataset.id = element.id;

  //form-check 
  let formCheck = document.createElement("div")
  formCheck.classList.add("form-check");

  //input
  let input = document.createElement("input");
  input.classList.add("form-check-input");
  input.type = "checkbox";
  input.id = "checkbox" + element.id;
  input.name = "checkbox" + element.id;
  input.dataset.target = "checkbox";

  //label
  let label = document.createElement("label");
  label.classList.add("form-check-label");
  label.setAttribute("for", input.id);
  label.textContent = element.value;

  //btn div
  let divbtn = document.createElement("div");
  divbtn.classList.add("d-flex", "ms-auto");

  //btn edit
  let edit = document.createElement("button");
  edit.classList.add("btn", "btn-warning", "btn-sm", "text-white", "me-2");
  edit.type = "button";
  edit.dataset.target = "edit";
  edit.textContent = "Edit";

  //btn 
  let del = document.createElement("button");
  del.classList.add("btn", "btn-danger", "btn-sm", "text-white", "me-2");
  del.textContent = "Delete";
  del.type = "button";
  del.dataset.target = "delete";

  //appendsChildren

  // form check
  parentDiv.appendChild(formCheck);
  formCheck.appendChild(input);
  formCheck.appendChild(label);
  // btns
  parentDiv.appendChild(divbtn);
  divbtn.appendChild(edit);
  divbtn.appendChild(del);

  todol.prepend(parentDiv)
})

todol.addEventListener("click", () => {
  let target = event.target.dataset.target;
  let index = event.target.parentNode.parentNode.dataset.id;
  if (target == "delete") {
    event.target.parentNode.parentNode.remove();
    todos = todos.filter((item) => {
      if (item.id != index) return item;
    })
    total.textContent = todos.length;
    isCompleted.textContent = todos.reduce((sum, element) => {
      if (element.isCompleted) sum++;
      return sum;
    }, 0)
  }

  if (target == "checkbox") {
    let checked = event.target.checked;
    todos[index].isCompleted=checked;
    isCompleted.textContent = todos.reduce((sum, element) => {
      if (element.isCompleted) sum++;
      return sum;
    }, 0)
  }

  if (target == "edit") {
    let property=todos.filter(element=>{
      if (element.id==index) return element;
    })
    hide();
    modalw.dataset.id=property[0].id;
    title.textContent=property[0].value;
    veryold.textContent=property[0].oldValue;
    timeedit.textContent=property[0].editeddate;
    modal.focus();
  }

})



save.addEventListener("click", (evt)=>{
  let value=modal.value;
  let id=modalw.dataset.id;
  let date=new Date().toLocaleString();
  
  todos.forEach(element => {
    if (element.id==id) {
      element.isEdited=true;
      element.editeddate=date;
      element.oldValue=element.value;
      element.value=value;
    }
    return element;
  });  
  hide();

  let x = todol.childNodes.forEach(
    element=>{
      
      try{
      
      let bool=element.dataset.id==id;
      if (bool) {

        let append= element.childNodes[0].childNodes[1].textContent=value
        element.childNodes[0].childNodes[1].textContent=value
      }
    }
    catch(e){
      if (e instanceof TypeError) {};
    }
  }
  )

})
