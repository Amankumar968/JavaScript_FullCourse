//objects inside Array
//very useful in real world application

// const users=[
    
//     {userId:1,firstName:'Aman',gender:'Male'},
//     {userId:2,firstName:'Rakshit',gender:'Male'},
//     {userId:3,firstName:'suraj',gender:'Male'},
//     {userId:4,firstName:'Aashu',gender:'Male'},

// ]
// for (let user of users)
// {
//     console.log(user.firstName," ",user.gender);
// }


/**************************NESTED DESTRUCTURING */

const users=[
    
    {userId:1,firstName:'Aman',gender:'Male'},
    {userId:2,firstName:'Rakshit',gender:'Male'},
    {userId:3,firstName:'suraj',gender:'Maleeee'},
    {userId:4,firstName:'Aashu',gender:'Maleee'},

]
const[user1,user2,user3]=users
console.log(user2);


const [{firstName}, ,{gender}]=users;
console.log(firstName);
console.log(gender);

