const inputBox  = document.querySelector(".row input");
const btn  = document.querySelector(".row button");
const tasklist  = document.querySelector(".tsklist");

function checked(){
if(inputBox.value === ''){
    alert("please write something!!");
}
else{
    var li = document.createElement("li");
    li.innerHTML = inputBox.value;
    tasklist.appendChild(li);

    var span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
}
inputBox.value = "";
saveData()
}
tasklist.addEventListener("click",function(e){
if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked")
    saveData()
}
else if(e.target.tagName =="SPAN"){
e.target.parentElement.remove();
saveData()
}
})
function saveData(){
    localStorage.setItem("data",tasklist.innerHTML);
}
function getdata(){
    tasklist.innerHTML = localStorage.getItem("data")
}
getdata();