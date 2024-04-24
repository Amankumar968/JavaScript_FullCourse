
// const firstButton=document.querySelector("#one") //ye ek button ke liye hua
// firstButton.addEventListener("click",function(){
//     console.log("you clicked me");
// })


//NOTE -> This agar event ke andar rahega to wo jo rahega wo output aaega
//this-agar event ke bahar rahega to wo windwo return krega


// const buttons = document.querySelectorAll(".my-button button")
// // console.log(buttons)
// //we can get using loop  for iterate all buttons
// for (let button of buttons)
// {
//     console.dir(this)
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//         // console.log("You Clicked on "+ this.id);
//         console.dir(this)
        
//     })
// }


/*****************agar arrow function use kre tab window aata hai */
// const buttons = document.querySelectorAll(".my-button button")
// // console.log(buttons)
// //we can get using loop  for iterate all buttons
// for (let button of buttons)
// {
//     console.dir(this)
//     button.addEventListener("click",()=>{
//         console.log(this.textContent);
//         // console.log("You Clicked on "+ this.id);
//         console.dir(this)
        
//     })
// }


// //using let loop 
// const buttons = document.querySelectorAll(".my-button button")
// for (let i=0;i<buttons.length;i++)
// {
//     buttons[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }


//using for each
 const buttons = document.querySelectorAll(".my-button button")
buttons.forEach(function(button){
button.addEventListener("click",function(){
    console.log("you clicke me");
})
})
