
//block scope vs function scope

//let and const are block scope
//var is function scope

//1st case
// {
//     let firstName="Aman"
//     console.log(firstName);

// }    



// {
//     let firstName="ram"
//     console.log(firstName);
// }

// console.log(firstName);

//2nd case using var

// {
//     var firstName="Aman"
//     console.log(firstName)
// }    
// console.log(firstName);//Output: Aman Aman


/************************VERY VERY IMPORTANT */
// if (true)
// {
//     let firstName="Aman" 
//     console.log(firstName);
// }
// console.log(firstName);//Uncaught Referrence error dega kyuki hum let and const ko {scope} ke bahar access nhi kr skte hai


//BUT agar yahi pe var rahe to error nhi dega

// if (true)
// {
//     var firstName="Aman" 
//     console.log(firstName);
// }
// console.log(firstName);



/**************3rd Case****** */

// function myApp()
// {
//     if(true)
//     {
//      var firstName="Aman"; //let aur const initialized krenge to aman and uncaughtReferenceerror aur agar var use krenge to aman aman print hoga output me
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// myApp();



/*************************4th Case */

// let firstName="jha"
// function myApp()
// {
//     if(true)
//     {
//      let firstName="Aman"; //yaha let ya const hoga to error dega kyuki usko bahar access nhi krskte hai
//      console.log(firstName)
//     }
//     console.log(firstName);//lekin esko access krste hai kyu ki firstname="jha" bahar defind hai to wo aa jaega
// }
// myApp();