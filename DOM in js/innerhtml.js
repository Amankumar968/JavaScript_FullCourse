//inner Html

// const headline=document.querySelector(".headline");
// console.log(headline.innerHTML);

//haeadline ke andar jo hai wo sb edit kr denge manage your task hello se ab sirf hello aaege uske jagah

// headline.innerHTML="<h1>Hello HTML</h1>"

// headline.innerHTML+="<button class=\"btn\">Learn More</button>"
// console.log(headline.innerHTML);


//classList we use to add anyproperty in css that we use in element
// first create css bg-dark and add property like bg-black text-white like this and than this property bg-dark add in section todo div

// const sectionTodo=document.querySelector(".section-todo");
// //console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');


//to remove container class from sectiontodo class 

sectionTodo.classList.remove("container");

const ans= sectionTodo.classList.contains("container");
console.log(true);

/************TOGGLE */
//Agar class bg-dark pehle se hai to wo use rremove kr dega agar nhi to add kr dega

sectionTodo.classList.toggle("bg-dark");

//example with header

const header=document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");

