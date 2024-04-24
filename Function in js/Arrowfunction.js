/*****************************Arrow Function */

// 1.function declaration
// function Wishbirthday()
// {
//     console.log("Happy birthday i am wishing you from function declaration");
// }


// Wishbirthday();

// 2.function expression

// const Wishbirthday=function()
// {
//     console.log("Happy Birthday i'm from function expression");
// }

// Wishbirthday();

// const twonumberadd=function(num1,num2)
// {
//     return num1+num2;
// }

// // const ans=twonumberadd(4,5);
// // console.log(ans);//9
// console.log(twonumberadd(4,5))//9



/*************Arrow Function explain */

// const Wishbirthday=()=>{
//     console.log("Happy Birthday I am from Arrow Function")
// }
// Wishbirthday();


// const sumofthree=(num1,num2,num3)=>{
//     return num1+num2+num3;
// }
// console.log(sumofthree(5,8,7));

// const iseven=(num)=>{
//     if (num%2==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(iseven(1));


//Jab ek hi parameter ho to (num) esko hum ese lik skte hai const iseven=num=>{}
// const iseven=(num)=>{
//     if (num%2==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(iseven(1));

//other way if one parameter
const isEven=number=>number%2===0;

console.log(isEven(4));