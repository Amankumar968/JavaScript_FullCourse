/*******************HOISTING IN FUNCTION */

// hello();
// function hello()
// {
//     console.log("hello world");
// }
//YE SIRF FUNCTION DECLARATION KE CASE ME HOGA FUNCTION EXPRESSION KE CASE ME NHI

// hello();
// const hello=function() //// uncaught typeerror:agar var hello likhte hai to error dega ki hello is not function
// {   //ye function expression hai yaha error dega cannot access hello before initialization
//     console.log("hello world");
// }


// hello();  
// const  hello=()=>{ // uncaught typeerror: agar var hello likhte hai to error dega ki hello is not function
//  //ye arrow function hai yaha bhi same error dega   
//     console.log("hellow world");

// }



/*************NEW TEST CASE */
console.log(hello);
 var hello="hellow world"; //ye var hello rahega tab->undefined ,agar const/let hello raha to Uncaught ReferenceError


