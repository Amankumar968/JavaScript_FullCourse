// console.log("Script Start");

// const allButtons=document.querySelectorAll(".my-button button")

// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         // let num=0;
//         for (let i=0;i<=10000000;i++)
//         {

        
//         console.log(e.currentTarget.textContent.num)
//         }
//     })
// })
// // let outerVar=0;.
// for (let i=0;i<=1000000000;i++)
// {
//     outerVar+=i;
// }
// console.log("value of outer variable is",outerVar);
// console.log("Script End !!!!");


/********************LITTLE PRACTICE WITH CLICK EVENTS */
const myButton = document.querySelectorAll('.my-button button');

// console.log(myButton.length)

myButton.forEach((button)=>{
    button.addEventListener("click" ,(e)=>{
        e.target.style.backgroundColor="yellow";
        e.target.color='#333'
    })
})