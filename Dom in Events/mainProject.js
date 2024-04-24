const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

console.log(todoInput);

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>
    `;
    newLi.innerHTML = newLiInnerHtml;
    todoList.appendChild(newLi);
    todoInput.value = ""; // Clear input field after adding todo
});

todoList.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("remove")) {
        // console.log("You have deleted the task");
        const targetedli=e.target.parentNode.parentNode;
        // console.log(targetedli)
        targetedli.remove()

    }
    if (e.target.classList.contains("done")) {
        // console.log("You have completed the task");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration= "line-through"; 
    }
});
