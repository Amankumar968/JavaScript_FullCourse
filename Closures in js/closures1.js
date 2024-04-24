//function can return functions

//1
// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans=outerFunction ();
// ans();

// 2.
// function printFulName(firstName,lastName)
// {
//     function printName(){
//         console.log(firstName+"      "+lastName)
//     }
//     return printName;
// }

// const ans=printFulName("Aman","kumar");
// //connsole.log(ans);
// ans();


//3.

function hello(x)
{
    const a="var A";
    const b="var B";

    return function()
    {
        console.log(a,b,x);
    }

  
}
const ans=hello("arg");

ans();