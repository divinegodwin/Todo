let modal = document.querySelector(".modal");
let container1 = document.querySelector(".container1");
let name = document.querySelector(".name");
let nameBtn = document.querySelector(".name-btn");

let p = document.querySelector(".input-name-value");

let pContainer = document.querySelector("#validation");


if(localStorage.getItem("validation") == null){
window.onload =()=>{
  
  container1.classList.add("blur");
  
    nameBtn.addEventListener("click", ()=>{
      
        console.log("do not exist")
        modal.style.display ="none";
      if(name.value != ""){
     
    
     container1.classList.remove("blur");
      p.innerHTML = " Hello " + name.value;
      
      localStorage.setItem("validation", p.innerHTML);
      
      }
    
    })
}

}else{
  console.log("exist");
  modal.style.display="none";
  p.innerHTML = " Hello" + name.value;
  console.log(p.innerHTML)
}
  

 p.innerHTML = localStorage.getItem("validation");
//naming the Dom
let input = document.querySelector(".text");
    addBtn = document.querySelector(".add"),
    systemTodo = document.querySelector(".system-todo"),
    todoContainer = document.querySelector("#todo-container");


addBtn.addEventListener("click", (e) => {
    if (input.value != "") {
      let todos = document.createElement("li");
        todos.innerHTML = input.value;
        todoContainer.appendChild(todos);
        todos.classList.add("todos");
        localStorage.setItem("todoContainer", todoContainer.innerHTML);
    
        // clear input after all.
        input.value = "";
    } else {
        alert("Input cannot be EMPTY!!!")
    }
})


/* Deleting a todo item and updating the todo Container */
addEventListener("dblclick", (e) => {
    todoContainer.removeChild(e.target);
    localStorage.setItem("todoContainer", todoContainer.innerHTML)
})

/* Clear all the items 
and updates the local storage as well*/
function clear_all() {
    todoContainer.innerHTML = "";
    localStorage.clear("todoContainer");
}


/* Update the content of the
todo container on start */
todoContainer.innerHTML = localStorage.getItem("todoContainer");

