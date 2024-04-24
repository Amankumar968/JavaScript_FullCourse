//callback mean function as a argument ek function lega called callback
const numbers=[1,2,3,4,5,10]//reduce as input callback function lega
// //aim:sum of all the number in array
// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })
// console.log(sum);

//initial value add kr skte hai

// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },100)
// console.log(sum);


//accumulator,currentValue,return
//1             2           3
//3             3           6
//6             4           10
//10            5           15
//15            10          25

/************************2nd Example************* */
const userCart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000}
]
const totalammount=userCart.reduce((totalPrice,currentValue)=>{
return totalPrice+currentValue.price;
},0)

console.log(totalammount);

//total Price  currentValue    return
//0                 {}           12000
//12000             220000      340000
//34000             15000       490000