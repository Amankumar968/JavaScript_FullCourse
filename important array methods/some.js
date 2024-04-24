const numbers=[3,5,11,9]

//kya ek bhi number esa hai jo even hai
//true

//const ans=numbers.some((number)=>number%2===0)
//console.log(ans);

const userCart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:15000}
]
const ans=userCart.some((cartitem)=>cartitem.price>30000) //kisi ek ka bhi bhi price 30000 se jyada hai kya
console.log(ans);