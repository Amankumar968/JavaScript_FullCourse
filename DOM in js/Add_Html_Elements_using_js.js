//add new html elements to page


//innerHtml to add html elements

// const todolist=document.querySelector(".todo-list");
// console.log(todolist.innerHTML)
// todolist.innerHtml="<li>New Todo</li>"


//jo pehle se usme likha hai wo to rahe hi uske sath extra add ho jaee

// todolist.innerHTML=todolist.innerHTML + " <li>New Todo</li>"

//when you should use it ,when you should not



/*********************To Add elements using these methods */
//document.createElement();
//append //jo kisi element ke baad add krega 
//prepend//jo kisi element ke starting mein add krta hai
//remove

// const NewTodoItem=document.createElement("li");
// const NewTodoItemText=document.createTextNode("Teach students")
// const todoList=document.querySelector(".todo-list");
// NewTodoItem.append(NewTodoItemText); //add prepend to check its adding at starting or not 
// todoList.append(NewTodoItem) 

// console.log(NewTodoItem);


/***************Check Removing  */
// const todo1=document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);


/*************Form ke badd ul se pehle change krna hai check in html where form in YOUR PLAN FOR TODAY check this  */

// const newTodoItem=document.createElement("li");

// newTodoItem.textContent="Teach students";

// const todoList=document.querySelector(".todo-list");
// todoList.before(newTodoItem); //chack with after