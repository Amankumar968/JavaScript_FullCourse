//how to clone array
//how to concatenate two arrays

// let array1=["item1","item2"];
// let array2=array1;
// console.log(array1===array2);//true


// let array1=["item1","item2"];

//  let array1=["item1","item2"];
// let array2=array1.slice(0);
// array1.push("item3");
// console.log(array1===array2);//false
// console.log(array1)
// console.log(array2);


let array1=["item1","item2"];

let array2=["item1","item2"];
 array2=array1.slice(0);
 array2=[].concat(array1);
array1.push("item3");
console.log(array1===array2);//false
console.log(array1)
console.log(array2);



/***********Spread Operator */
// let array1=["item1","item2"];

// let array2=[...array1];

// array1.push("item3");
// console.log(array1===array2);//dono array different

// console.log(array1);
// console.log(array2);



/************Array me add krne ke liye*************** */
// let arr1=["item1","item2"];

// using slice
// let array2=arr1.slice(0).concat(["array3,array4"]);

// // using concat
// let array2=[].concat(arr1,["item3","item4"]);

// // using spread operator
// let array2=[...arr1,"item3","item4"];

// console.log(arr1);
// console.log(array2);