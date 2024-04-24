//Array Destructuring

// const myArray=["value1","value2"];
// let myvar1=myArray[0];//1
// let myvar2=myArray[1];//2
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log("value of myvar2",myvar2);

// console.log("value of myvar1",myvar1);

// // 1 2 ke badle hum ye likh skte hai

// let [myvar1,myvar2]=myArray;
// myvar1="value changed";
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);


/***************IMPORTANT CONDITION************* */
// const myArray = ["value1"];

// let [myvar1, myvar2, myvar3] = myArray;

// console.log("value of myvar1 is", myvar1);
// console.log("value of myvar2 is", myvar2); // undefined (not myvar3)
// console.log("value of myvar3 is", myvar3); // undefined

/****************IMPORTANT CONDITION 2****** */

// const myArray=["value1","value2","value3","value4"];
// //agar hum chahte hai ki val1->myvar1 ho jae or val2->myvar3 ho jaae tb ye krenge var1 ,  ,var3
// let [myvar1,,myvar3]=myArray;
// console.log("value of myvar1 is",myvar1);
// console.log("value of myvar2 is",myvar3)//udefinded



/****************IMPORTANT CONDITION 3****** */
// const myArray=["value1","value2","value3","value4"]

//  let [myvar1,myvar2,...myNewArray]=myArray;
//  console.log("value of myvar1 ",myvar1);
//  console.log("value of myvar2",myvar2);
//  console.log(myNewArray);