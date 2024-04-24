// //optional chaining

// const user={
//     firstName:"AMan",
//    //lastname:{last:"kdkd"} //ye error dega esese bachne ke liye hum optionchaning krte jisse ki error nhi aaega agar wo nhi rahega to
// }
// console.log(user.firstName)
// console.log(user.lastname.last) 


// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);