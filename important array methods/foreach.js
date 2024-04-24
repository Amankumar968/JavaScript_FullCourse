const numbers=[4,2,5,8]; //foreach as a input callback method lega


// function multiplybytwo(number,index)
// {
// console.log(`index is ${index} number is ${number} `);
// console.log(`${number}*2 =${number*2}`);
// }

// multiplybytwo(numbers[0],0);
// multiplybytwo(numbers[1],0);

// for (let i=0;i<numbers.length;i++)
// {

//     multiplybytwo(numbers[i],i);
// }

// numbers.forEach(multiplybytwo);



/********************OTHER WAY FOR EACH */
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// })

// numbers.forEach(function(number,index){
//     console.log(number*3,index);
// })


/*******************3rd way*** */

// const users=[
//     {firstName:"aman",age:23},
//     {firstName:"mohan",age:21},
//     {firstName:"rahul",age:23},
//     {firstName:"ramesh",age:49},
//     {firstName:"kaka",age:21},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// })

// for (let user of users)
// {
//     console.log(user.firstName)//same work both do
// }

//using arrow function
// users.forEach((user)=>{
//     console.log(user.firstName);
// })
