/***********************OPERATOR********************** */
// 1. Arithmetic Operators:
// Addition: + //a=5 b=6 console.log(a+b)
// Subtraction: -
// Multiplication: *
// Division: /
// Modulus (Remainder): %
// Increment: ++
// Decrement: --


// 2. Assignment Operators:
// Assigns a value to a variable.// let x = 10; x += 5;
// Example: =, +=, -=, *=, /=, %=.


// 3. Comparison Operators:
// Compare values and return a Boolean result. // let a=5 b=6 
// Example: ==, ===, !=, !==, >, <, >=, <=. // console.log(a===b) console.log(a==b), console.log(a>b)


// 4. Logical Operators:
// Combine multiple Boolean expressions. // a=5 b=6 console.log(a&&b) console.log(a OR b)
// Example: && (logical AND), || (logical OR), ! (logical NOT).


// 5. Bitwise Operators:
// Perform bitwise operations on integers.
// Example: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift), >>> (unsigned right shift).
// Example:

// javascript
// Copy code
// let a = 5; // binary representation: 0101
// let b = 3; // binary representation: 0011

// console.log(a & b); // 1 (binary: 0001)
// console.log(a | b); // 7 (binary: 0111)


// 6. Conditional (Ternary) Operator:
// A shorthand for an if...else statement.
// Example: condition ? expr1 : expr2.
// Example:

// javascript
// Copy code
// let age = 20;
// let status = (age >= 18) ? 'Adult' : 'Minor';



/********************AND OR OPERATOR */
// let firstName="Aman";
// let age=32;

// if (firstName[0] ==="H")
// {
//     console.log("Your name starts with H");
// }
// if (age>18)
// {
//     console.log("You are above 18");
// }
// if (firstName[0]==="H" && age>18)
// {
//     console.log("Name starts with H and above 18");
// }
// else {
//     console.log("inside else");
// }

let firstName="Aman";
let age=14;

if (firstName[0]==="A" || age>18)
{
    console.log("Name starts with H and above 18");
}
else {
    console.log("inside else");
}