const btn=document.querySelector(".btn-headline");
//method -->add Event Listener

//1.st way
// function clickMe(){
//     console.log("You clicked Me")
// }
// btn.addEventListener("click",clickMe);


//2nd way.
// btn.addEventListener("click",function(){
//     console.log("You clicked me");
// })

btn.addEventListener("click",()=>{
    console.log("Arrow function");
})