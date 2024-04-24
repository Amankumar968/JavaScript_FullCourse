/************Rest Parameter */

// function myFunc(a,b,...c){

//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c); // using spread operator to print all the
// }
// myFunc(4,5,6,78,230,2,24)



//Question Add All (1,2,3,4,5,6,7,8)

function AddAll(...numbers)
{
    let  sum=0;
    for (let num of numbers)
    {
     sum+=num;
    }
    return sum;
}
console.log(AddAll(1,2,3,4,5));