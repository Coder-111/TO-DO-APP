let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
     
    let delBtn = document.createElement("button");
    delBtn.innerText ="Delete";
    delBtn.classList.add("Delete");
    item.appendChild(delBtn);
    console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
if(event.target.nodeName == "BUTTON"){
    let listItem =  event.target.parentElement;
    listItem.remove();
    console.log("deleted");
}
});
//let delBtns = document.querySelectorAll(".Delete");
//for (delBtn of delBtns){
    //delBtn.addEventListener("click", function() {
      // let par = this.parentElement;
       //console.log(par);
      //par.remove();
    //});
//}