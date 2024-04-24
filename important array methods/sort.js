//sort
//5,9,1200,400,3000
//5,9,400,1200,3000

// const numbers=[5,9,1200,400,3000]
//esne sbko string me change kr diya
//["5","9","1200","400","3000"]
//[53,57,49,52,51] 
//string ko sort krne ke liye ascii use krte hai

//'0':48;  //agar 1200 hai tprv wo first character ka value ddekhega jest 1200->1 or 1->ascii->49
//'1':49
//'2':50
//'3':51
//'4':52
//'5':53
//'6':54
//'7':55
//'8':56
//'9':57
// numbers.sort();//sort es no array ko change krega

// console.log(numbers);

//question 2. 
// const userNames=['harshit','abcd','mohit','nitish','ABCD'] //esme sort hoga using aschi character abc jiska precedence pehle ho lekin esme agar capital me koi hai to wo pehle hoga
// userNames.sort();
// console.log(userNames) 

//sort method as a input callback bhi le skta hhai


// const numbers=[5,90009,1200,400,3000]
// numbers.sort((a,b)=>//sort ho gaya  ascending me 
// {
//     return a-b;
// })

// console.log(numbers);
//a-b->790
//a->1200 b->400 possitive (greater than 0) agr possitive hai to than b ko pehle rakh denge a ko uske bbad


//a-b--->negative 
//5,9,--->-4 //agr negative hua to pehle a ko fir b ko



// const numbers=[5,90009,1200,400,3000]
// numbers.sort((a,b)=>//sort ho gaya  ascending me 
// {
//     return b-a;
// })


//Price LowtoHigh HighToLow

const products=[
    {productId:1,productName:"p1",price:300},
    {productId:2,productName:"p2",price:200},
    {productId:3,productName:"p3",price:8000},
    {productId:4,productName:"p4",price:500}
]

const lowtohigh=products.slice(0).sort((a,b)=>{ //ye pure ke pure product ko change kr raha esliye hum clone ka use krene like slice
return a.price-b.price//sbke km price waala pehle print hoga sort kr dega
})

console.log( lowtohigh);

// const lowtohigh=products.slice(0).sort((a,b)=>{ //ye pure ke pure product ko change kr raha esliye hum clone ka use krene like slice
//     return b.price-a.price//sbke jydaa price waala pehle print hoga sort kr dega decnding
//     })
    
//     console.log( lowtohigh);