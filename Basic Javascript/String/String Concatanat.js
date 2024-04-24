//String Concatnation

// let string1 = "Aman";
// let string2 = "jha";

// // Remove the extra plus sign before string2
// let fullName = string1 + " " + string2;
// console.log(fullName);//Aman Jha

// let string1 = "17";
// let string2 = "10";

// // Remove the extra plus sign before string2
// let newString = string1 +  string2;
// console.log(newString); //1710

let string1 = "17";
let string2 = "10";

// Remove the extra plus sign before string2
let newString = +string1 +  +string2;
console.log(newString); //27
console.log(typeof(newString))//number
