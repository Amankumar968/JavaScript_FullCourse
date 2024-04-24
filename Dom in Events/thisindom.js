const btn=document.querySelector(".btn-headline");



// btn.addEventListener("click",function(){
//     console.log('You clicked Me');
//     console.log('value of this');
//     console .log(this) //es case me this ki value button hi hoga
//                     //      <button class="btn btn-headline">Learn More</button>
// })

// function clickedme(){ //ye function me bhi same aaega
//     console.log(this);
// }
// btn.addEventListener("click",clickedme)
// {
//     console.log('You clicked Me');
//     console.log('value of this');
//    //es case me this ki value button hi hoga
//                     //      <button class="btn btn-headline">Learn More</button>
// }


/********************BUT IN ARROW FUNCTION MEIN window return krega this */
btn.addEventListener("click",()=>{
    console.log('You clicked Me');
    console.log('value of this');
    console .log(this) //es case me this ki value button hi hoga
                    //      <button class="btn btn-headline">Learn More</button>
})