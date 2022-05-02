let requesURL = 'https://www.floatrates.com/daily/uzs.json';
let request = new XMLHttpRequest();
request.open('get', requesURL);
request.responseType = 'json'   
request.send();
request.onload = function () {
    const currency = request.response;
    updatedisplay()
    {
    currencyinvertvalue(currency);
    currencyvalue(currency);
   }
}

function updatedisplay(){
document.getElementById("value1").addEventListener("change",function(){
    currencyvalue(request.response);
})
}

function currencyvalue(obj) {
var value=document.getElementById("currencyname").value;
   var x=parseInt(document.getElementById("value1").value);
   var z=obj[value].inverseRate;
   var zz=obj[value].alphaCode;
document.getElementById("value1").placeholder="       "+zz;
   var total=x*z;   
   var y=document.getElementById("value2")
    y.value=total
    y.addEventListener("change",function(){
        currencyinvertvalue(request.response)
    })
}   

function currencyinvertvalue(obj) {
    var value=document.getElementById("currencyname").value;
   var x=parseInt(document.getElementById("value2").value);
   var z=obj[value].rate;
   
   var total=x*z;   
   var y=document.getElementById("value1")
    y.value=total
    
}
