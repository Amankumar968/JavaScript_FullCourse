// console.log(this)
// console.log(window);
// console.log(firstName);
// var firstName="Aman"; //isme undefined dega lekin jesehi let const krenge usme error dega uncaugher refference error befire initializationn aur aage waala code print bhi nhi hoga lekin isme var me undefined dikha ke aage waala code run hoga

// console.log(firstName);

//2.
// console.log(this);
// console.log(window);
// console.log(myfunction);
// console.log(fullName);

// function myfunction (){
//     //function declaration hai
//     console.log("this is my function")
// }

// var  firstName="Aman";
// var lastName="jha";
// let  fullName=firstName + " " +lastName; //yahi par agar let ya const use kr de to wo error de dega aur aage nhi chalega code first.js:12  Uncaught ReferenceError: Cannot access 'fullName' before initialization
// console.log(fullName);
// console.log(firstName)


/****************3.Let and Const*********** */

// console.log(firstName);
// let firstName="Aman"; //lekin var me undefined aur aman show krega
// console.log(firstName)


// const firstName;
// console.log(firstName); //error because const means it cannot be reass


/***********************function Expression using */
// console.log(myFunction) //error show kyu ki function expresssion hai ye bhi let ke jese hi work krega
// let firstName="Aman";
// let lastName="Kumar";

// const myFunction=function ()  //agar ye krde fir function myFunction () fir koi error nhi dega show kr dega firstName lastName
// {
//     let var1="first variable";
//     let var2="second variable";
    
//     console.log(var1);
//     console.log(var2)
// }

/******************************FUNCTION EXECUTION CONTEXT ********/

// let foo="foo"
// console.log(foo);

// function getFullName(firstName,lastName)
// {
//     console.log(arguments);

//     let myvar="var inside fun";
//     console.log(myvar);

//     const fullname=firstName+" "+lastName;
//     return fullname
// }

// const personName=getFullName("Aman","Kumar");
// console.log(personName);





/***********************LEXICAL ENVIRONMENT SCOPE CHAIN */

// const lastName="kumar"
// const printName=function()
// {
//     const firstName="Aman"
//     console.log(firstName);
//     console.log(lastName);
// }

// printName();





// const lastName = "kumar";

// const printName = function(){
//     const firstName = "Aman";
//     function myFunction(){
//         console.log(firstName);
//         console.log(lastName);
//     }
//     myFunction()
    
// }
// printName();