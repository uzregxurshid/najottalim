let x=document.querySelector(".myform");
x.addEventListener("submit", (evt)=>{
  evt.preventDefault();
  let val=+x.querySelector("#points").value;
  let y= x.querySelector(".helpId");
  let result=x.querySelector(".result");
  let mytanish=x.querySelector(".checking").checked;
  switch (true){

    case val<0:{
      y.textContent="noto'g'ri ma'lumot kiritdingiz";
    }
    break;
    case val>189: {
      y.textContent="noto'g'ri ma'lumot kiritdingiz";
    }
    break;
    case ((mytanish==true) && (val>=0 && val<=189 )) : {
      result.textContent="Byudjet muborak!";
      result.classList.add("text-success");
    }
    break;
    case val<50 : {
      result.textContent="Afsuski talaba bo'la olmadingiz";
      result.classList.add("text-danger");
      }
    break;
    case val<=65:{
      result.textContent="Super kontrakda o'qish tavsiya etiladi";
      result.classList.add("text-warning");
    }
    break;
    
    case val<=80:{
      result.textContent="Kontrak asosida o'qishga qabul qilindingiz!";
      result.classList.add("text-primary");
    }
    break;
    case val>=100:{
      result.textContent="Byudjet muborak!";
      result.classList.add("text-success");
    }
    break;
    default: alert("Nimadir xato ketti"); break;
  }
})