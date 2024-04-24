//get and set Attributes

{/* <li class="nav-item"><a href=""></a> </li> */}

//href attribute hai input id  placeholder ye sb
// const link=document.querySelector("a");//pehla anchor tag konsa hai html mein usko print kr dega

// console.log(link);

//
// const link=document.querySelector("a");
// console.log(link.getAttribute("href"))

//2nd example
// const inputElement=document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type")); //jo pehle input type hoga uska type aake de dega

//to change nav home name to anything
const link=document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href","https://google.com");
console.log(link.getAttribute("href"));


//console mein #home aaraha hai humko sirf home chahiye kaise hoga console.log(link.getAttribute("href").slice(1))