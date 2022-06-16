//naming the Dom

let input = document.querySelector(".text");
let addBtn = document.querySelector(".add");
let systemTodo = document.querySelector(".system-todo");
let todoContainer = document.querySelector("#todo-container");
systemTodo.addEventListener("dblclick", ()=>{
  systemTodo.style.display = "none";
  })

addBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  if(input.value != ""){
  let todos = document.createElement("div");
  todos.innerHTML = input.value;
  todoContainer.appendChild(todos);
  todos.classList.add("todos");
  
  localStorage.setItem("todoContainer", todoContainer.innerHTML);
}
})

todoContainer.innerHTML = localStorage.getItem("todoContainer");


addEventListener("dblclick", (e)=>{
  todoContainer.removeChild(e.target);
  //localStorage.clear("todoContainer", e.target)
  
})

