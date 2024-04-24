//find method

const myArray=["Hello","cat","dog","lion"];

// function isLength3(myArray)
// {
//     return String.length===3
// }
// const  ans=myArray.find((string)=>string.length===3)
// console.log(ans);

const users=[
    {userId:1,userName:"aman"},
    {userId:2,userName:"jha"},
    {userId:3,userName:"nithis"},
    {userId:4,userName:"mohit"}
];
const myUser=users.find((user)=>user.userId===3)
console.log(myUser)