//understand callback
// function myFunct()
// {
//     console.log("Function is doing some task")
// }


// function myFunc2()
// {
//     console.log("Function is doing task 2");
// }

// myFunct();
// myFunc2();

//implement first task using callback
//function myFunct(callback)
// {
//     console.log("Function is doing some task")
//     callback();
// }


// function myFunc2()
// {
//     console.log("Function is doing task 2");
// }

// myFunct(myFunc2);


//Another way
// function myFunct(callback)
// {
//     console.log("Function is doing some task")
//     callback();
// }

// myFunct(()=>{
//     console.log("function is doing task 2");
// })


//Another example


// function getTwoNumbersAdd(number1,number2,callback)
// {
//     if(typeof number1==="number" && typeof number2==="number")
//     callback(number1,number2)

//     else {
//         console.log("Wrong Data Type");
//     }
// }

// function addTwoNumbers(num1,num2)
// {
//     console.log(num1+num2);
// }
// getTwoNumbersAdd(4,5,addTwoNumbers); //agar yaha "4" ho tab



//uppar waale example ko implement kar sakte hai

// function getTwoNumbersAdd(number1,number2,callback)
// {
//     if(typeof number1==="number" && typeof number2==="number")
//     callback(number1,number2)

//     else {
//         console.log("Wrong Data Type");
//     }
// }

// getTwoNumbersAdd(4,4,(num1,num2)=>{
//     console.log(num1+num2);
// });


//using ON SUCCESS OR ON ERROR

// function getTwoNumbersAdd(number1,number2,onSuccess,onFailure)
// {
//     if(typeof number1==="number" && typeof number2==="number")
//     onSuccess(number1,number2)

//     else {
//         onFailure();
//     }
// }

// getTwoNumbersAdd("4",4,(num1,num2)=>{
// console.log(num1+num2);
// },()=>{
//     console.log("wrong data");
//     console.log("please pass numbers only");
// });



//upper waale code ko change krte hai
// function getTwoNumbersAdd(number1, number2, onSuccess, onFailure) {
//     if (typeof number1 === "number" && typeof number2 === "number")
//         onSuccess(number1, number2);
//     else {
//         onFailure();
//     }
// }

// function onFail() {
//     console.log("wrong data");
//     console.log("please pass numbers only");
// }

// function onSuccessAdd(number1, number2) {
//     console.log("Sum:", number1 + number2);
// }

// getTwoNumbersAdd(4, 4, onSuccessAdd, onFail);
