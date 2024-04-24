
// JavaScript has several data types that can be broadly categorized into two main groups: primitive data types and object data types. Here's an overview of the common data types in JavaScript:

// Primitive Data Types:
// String:

// Represents textual data.
// Example: "Hello, World!".
// Number:

// Represents numeric values, including integers and floating-point numbers.
// Example: 42 or 3.14.
// Boolean:

// Represents a logical value, either true or false.
// Undefined:

// Represents a variable that has been declared but not assigned a value.
// Null:

// Represents the intentional absence of any object value.
// Note: typeof null returns 'object', but it is a special case and not a reference to any object.
// Symbol:

// Introduced in ECMAScript 6 (ES6).
// Represents a unique and immutable value, often used as an identifier for object properties.
// Object Data Types:
// Object:

// A complex data type that allows you to store key-value pairs.
// Example: { name: 'John', age: 25 }.
// Array:

// A special kind of object used to store ordered collections of values.
// Example: [1, 2, 3].
// Function:

// A reusable block of code that can be invoked with a set of parameters.
// Example:
// javascript
// Copy code
// function add(a, b) {
//   return a + b;
// }
// Special Data Types:
// BigInt:

// Introduced in ECMAScript 2020 (ES11).
// Represents whole numbers larger than 2^53 - 1.
// Symbol:

// As mentioned earlier, Symbol can also be considered a primitive data type.
// Checking Data Types:
// You can use the typeof operator to check the data type of a variable:

// javascript
// Copy code
// typeof variableName;
// Type Conversion:
// JavaScript also allows you to convert between data types using various functions or operators.

// javascript
// Copy code
// // String to Number
// let strNumber = "42";
// let num = Number(strNumber);

// // Number to String
// let num = 42;
// let strNumber = String(num);
// Understanding and working with these data types is fundamental to programming in JavaScript.


// let age=22;
// let firstName="Aman"

// console.log(typeof firstName);//string
// console.log(typeof age);//number

/*****************Convert number to string********** */


// 1.console.log(typeof (age+""));//string 22->"22"

// 2.let newage=age+""
// console.log(typeof(newage)) //string

// age=age+""
// console.log(typeof age) //string

/********************Convert string to number************* */

// let myStr="34";
// console.log(typeof myStr); //string


// let myStr=+"34";
// console.log(typeof myStr);//number

/*******************Quick code using ******** */
// let age=18;
// age=String(age);
// console.log(typeof age); //string

let age="18";
age=Number(age);
console.log(typeof age);//number