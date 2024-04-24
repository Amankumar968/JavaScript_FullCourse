//setTimeout() as a input function lega
//o/p->1 3 2

//1
// console.log("script start")//1
// function hello()//2
// {
//     console.log("Hello world!!");
// }
// setTimeout(hello,1000);//hum chahte hai hello function ek sec baad run ho

// // console.log("Script End");//3


// 2nd 
console.log("script Start")

setTimeout(()=>{
console.log("inside setTimeout");
},0);//0 sec likhne ke baad bhi wo end mein print hoga

for (let i=0;i<100;i++)
{
    console.log("......");
}
console.log("Script End");//3


//3rd to clear settimeout
// console.log("script start");

// const id=setTimeout(()=>{
//     console.log("inside SetTimeout");
// },0)//yaha ,1000 ho yaa aur kuchh same hoga
// for (let i=1;i<100;i++)
// {
//     console.log("....");
// }
// console.log("setiemout id is",id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("Script end");