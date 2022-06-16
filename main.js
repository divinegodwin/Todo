//naming the Dom
let input = document.querySelector(".text");
let addBtn = document.querySelector(".add");
let systemTodo = document.querySelector(".system-todo");
let todoContainer = document.querySelector("#todo-container");




addBtn.addEventListener("click", (e) => {
    if (input.value != "") {
        let todos = document.createElement("li");
        todos.innerHTML = input.value;
        todoContainer.appendChild(todos);
        todos.classList.add("todos");

        localStorage.setItem("todoContainer", todoContainer.innerHTML);
    } else {
        alert("Input cannot be EMPTY!!!")
    }
})

//todoContainer.innerHTML = localStorage.getItem("todoContainer");


addEventListener("dblclick", (e) => {
    todoContainer.removeChild(e.target);
    //localStorage.clear("todoContainer", e.target)
})
