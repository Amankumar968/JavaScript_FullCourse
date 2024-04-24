// console.log("hello world")
const grandParent=document.querySelector(".grandparent");

// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");

//Event Bubbling
// child.addEventListener("click",()=>{
//     console.log("BUBBLE Child");
// })

// parent.addEventListener("click",()=>{
//     console.log("BUBBLE  parent");
// })


// grandParent.addEventListener("click",()=>{
//     console.log("BUBBLE grandparent");
// })

// document.body.addEventListener("click",()=>{
//     console.log("BUBBLE body");
// })



//Event Capturing esme ek boolean value true false add ho jaega wo ye bataega ki ese element ya object me eventlistener call krenge ki nhi

// child.addEventListener("click",()=>{     //pehle capture hoga fir bubble hoga
//     console.log("Capture !!! child");
// },true)

// parent.addEventListener("click",()=>{
//     console.log("Capture !!! parent");
// },true)


// grandParent.addEventListener("click",()=>{
//     console.log("Capture !!! grandParent");
// },true)

// document.body.addEventListener("click",()=>{
//     console.log("Capture !!! document body");
// },true)


/********************EVENT DELEGATION */

grandParent.addEventListener("click",(e)=>{
    // console.log(e.target.textContent);
    console.log(e.target);
})