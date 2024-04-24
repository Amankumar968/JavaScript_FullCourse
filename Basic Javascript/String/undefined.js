// undefined
//null

// let firstName;//jab koi var bana denge value assign nhi krenge to undefined hoga
// console.log(typeof firstName);//undefined


// let firstName;
// // console.log(typeOf firstName)

// firstName="Aman";
// // console.log(typeof firstName);
// console.log(typeof firstName,firstName);

//but const me esa nahi hai usme syntax error aa jaega usme dalna hi hoga kuch
// const firstName;//const declaration must be initialiazed
// console.log(firstName);




/*****************************NULL******** */
// let myVariable=null;
// console.log(typeof myVariable)//object->js me error hai bug ye thik krenge to bohot saara project log banaye hai(es concenpt p) usme proble aa jaega 
// console.log(myVariable);//null
// myVariable="Aman"
// console.log(myVariable,typeof myVariable);//Aman String

/*********************BIG INT************ */

// let myNumber="123";

// console.log(Number.MAX_SAFE_INTEGER);


// let myNumber=BigInt(1223877888888888887n);
// let sameMyNumber=123n;

//Big int ko dusre data type ke sath mix nhi kr skte
let myNumber=BigInt(12);
let sameMyNumber=123;

console.log(myNumber+ sameMyNumber);//undefined.js:43  Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions