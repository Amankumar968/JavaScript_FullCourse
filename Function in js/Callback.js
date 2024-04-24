// function myFunc(a)
// {
//     console.log("Hellow World");
//     console.log(a);

// }
// myFunc([4,4,8]);

// a ab array ke jese output dega kyuki function me jo call hua hai wo array hai wo a ke pass ja raha hai to array a ho jaega

//esehi hum function me function ko bhejte hai as paramaeter to wo function call back ho jaega

// function myFunc2()
// {
//     console.log("inside my func 2");
// }

// function myFunc(callback){
//     console.log("hello i am from myfunc")
//     callback()
// }
// myFunc(myFunc2);



function myFunc2(name)
{
    console.log(`Your name is ${name}`)
    console.log("inside my func 2");
}

function myFunc(callback){
    console.log("hello i am from myfunc")
    callback("Aman")
}
myFunc(myFunc2);