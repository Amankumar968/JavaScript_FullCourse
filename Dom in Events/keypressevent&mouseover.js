//keypress even
//mouseover event

//keypress example
// const body=document.body;

// body.addEventListener("keypress",(e)=>{
// console.log(e.key);


// })

//mouseover event

const mainButton=document.querySelector('.btn-headline');
// console.log(mainButton)
mainButton.addEventListener("mouseover",()=>{
    console.log("mouseover event Occured!!!");
})

mainButton.addEventListener("mouseleave",()=>{
    console.log("mouseleave event Occured!!!");
})
