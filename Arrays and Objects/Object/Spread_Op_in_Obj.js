// Spread Operator in array

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];
 
// const newarray=[...array1,...array2,45,41]

// // const newarray=[..."12378577"]
// console.log(array1);
// console.log(newarray);


/**********************Spread Operator in Object */
// const obj1={
// key1:"value1",
// key2:"value2",

// };

// const obj2={
//     key1:"valueunique",
//     key3:"value1",
//     key4:"value2",
    
//     };
// const newObject={...obj2,...obj1,key69:"value69"};
// console.log(newObject);

const newObject={..."abc"};
const newObject1={...["item1","item2"]};
//  const newObject1={...["abcdefghijklmnopqrstuvwxyz"]};
console.log(newObject);
console.log(newObject1);