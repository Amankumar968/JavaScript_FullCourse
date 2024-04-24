// fetch

// const URL="https://jsonplaceholder.typicode.com/posts";
 
// // const kyareturnkrega=fetch(URL)
// // console.log(kyareturnkrega); promise return krta hai

// fetch(URL)
// .then(response=>{
//     console.log(response.json)//ye bhi promise return krega
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })

//fetch reject ka error tab dega jab network error rahega tab otherwise wo
//aur koi error nhi dega

//isme ccatch nhi chalta hai,sirf then chalta hai

//see in this program

// const URL="https://jsonplaceholder.typicode.com/posts";
 
// // const kyareturnkrega=fetch(URL)
// // console.log(kyareturnkrega); promise return krta hai

// fetch(URL)
// .then(response=>{
//     // console.log(response.json)//ye bhi promise return krega
// if(response.ok){
//     return response.json();

// }
// else{
//     throw new Error("something went wrong!!!");
// }
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })


/***************TO RIght anything in using POST */


const URL="https://jsonplaceholder.typicode.com/posts";
 
// const kyareturnkrega=fetch(URL)
// console.log(kyareturnkrega); promise return krta hai

fetch(URL,{
    method:'POST',
    body:JSON.stringify({
    userId:1,
    }),

    headers:{
'Content-type':'application/json;  charset=UTF-8',
    },
})
    
.then(response=>{
    console.log(response.json)//ye bhi promise return krega
    return response.json();
})
.then(data=>{
    console.log(data);
})
