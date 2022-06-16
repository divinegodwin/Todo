//naming the Dom
let input = document.querySelector(".text"),
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
