//async await
//using fetch 
// const URL="https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// .then(URL).then(response=>{
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })

//2nd 
console.log("Script start");
const URL="https://jsonplaceholder.typicode.com/posts";

async function getPosts() //ye async humesa rutrn mein promise dega

{
    
 const response=await fetch(URL) //ye fetch bhi return krega promise
 if (!response.ok){
    throw new Error("something went wrong");
 }
 const data= await response.json() //ye response .json bhi promise return krta hai
return data;

}
// const myData=getPosts();
// console.log(myData) //ye bhi promise hi return krega

getPosts()
.then(myData=>{
    console.log(myData);
})//isme bhi catch wala nhi chalega isliye hum getpost function mein hi error handle kr lenge

.catch(error=>{
    console.log("inside catch")
    console.log(error);
})

console.log("Script end");
//ye bhhi asynchronouse hi dekhne ke liye run kro program usem script start fir script end print hoga fir ye program run hoga


/************END JS COURSE DATE - 16 - 04 -2024 13:10AM  */