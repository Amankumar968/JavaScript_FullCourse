//for of loop

// const fruits=["apple","banana","Orange"]
// for (let fruit of fruits)
// {
//     console.log(fruit.toUpperCase())
// }



// for in loop ->ye index provide krta hai 0 1 2
const fruits=["apple","banana","Orange"]
const fruits2=[];
for (let index in fruits)
{
fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2)
