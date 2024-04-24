//Promise .resolve
//promise chaining

// const myPromise=Promise.resolve(5)
// myPromise.then((value)=>{
//     console.log(value)
// })

//then() method humesa promise return krta hia

function myPromise(){
    return new Promise((resolve,reject)=>{
resolve("fooo")
    })
}
myPromise().then((value)=>{
console.log(value);
value+="bar"
return value//yaha pe value return nhi ho raha hai yaha pe promise return ho raha hum yaha pe firse then laga skte hai agar return kuchh nhi krenge to undefinded de dega
})
.then((value)=>{
    value+=" aman"
    return value;
})
.then((value)=>{
    value+=" jha"
    return value;
   
    
})

.then((value)=>{
    console.log(value);
})