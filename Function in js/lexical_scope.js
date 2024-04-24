/***********************LEXICAL SCOPE */
//1.
// function myapp(){
//     const myVar="value1";

//     function myFunc()
//     {
//         const myVar="value59";
//         console.log("inside myFunc",myVar);
//     }

//     console.log(myVar);
//     myFunc();
// }

// myapp();  //output value1, inside myfunc value59

//2.

// function myapp(){
//     const myVar="value1";

//     function myFunc()
//     {
//         // const myVar="value59";
//         console.log("inside myFunc",myVar);
//     }

//     console.log(myVar);
//     myFunc();
// }

// myapp(); //value1,inside my func value1


/**********************2ND CASE* */

// const myVar="value1";
// function myapp(){

//     function myFunc()
//     {
//         // const myVar="value59";
//         console.log("inside myFunc",myVar);
//     }

//     console.log(myVar);
//     myFunc();
// }

// myapp();


/******************3rd Case */

const myVar="value1";
function myapp(){

    function myFunc()
    {
        // const myVar="value59";
   
        const myfunc2=()=>{
        console.log("inside myFunc",myVar);
        }
        myfunc2();
    }

    console.log(myVar);
    myFunc();
}

myapp();