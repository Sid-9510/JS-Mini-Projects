// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// const { createElement } = require("react");

// btn.addEventListener("click", function(){
//     // console.log(inp.value);
//     let item = document.createElement("li"); // To add the task in list from input box.
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item); // to add the task in the ul as a child.
//     inp.value="";
// });

// ul.addEventListener("click", function(eve){
//     if(eve.target.nodeName == "BUTTON"){
//         let ListItem = eve.target.parentElement;
//         // console.log(ListItem);
//         // console.log("Delete");
//         ListItem.remove();
//     }
// })
/*---------------------------------------------------------------------------------------------------------*/
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//         // We can do this like "this.parentElement.remove();" also.
//     })
// }

/******************NEW JS******************************/

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must add something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    console.log(li);
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();