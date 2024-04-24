//sets (it is iterable)
//store data
//sets also have its own methods
//No index-based access
//Order is not guaranteed
//unique items only(no duplicates allowed)


// const numbers=new Set([1,2,3,3]);//lienear me data store hoga

 
//set me duplicate allow nhi hai 
// console.log(numbers);
// console.log(numbers[3]) //index based access nhi kr skte hai
//order ki gaurentee nhi hai 123 se 213 bhi ho skti hai


//other way

// const items=['items1','items2','items3']
// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// numbers.add(items);
// console.log(numbers)


// new array me banega same hai tprv bhi
// const items=['items1','items2','items3']
// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// numbers.add(['items1','items2']);
// numbers.add(['items1','items2']); //ab ye differant hai
// console.log(numbers)


// //lekin isme egnore kr dega ek array ko add kr rahe ahi
// const items=['items1','items2','items3']

// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// numbers.add(items);
// numbers.add(items); 
// console.log(numbers)


//Sets me check krna hai ki isme ye eleement hai ki nhi

// const items=['items1','items2','items3']
// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);
// if (numbers.has(1))
// console.log("1 is present");
// else 
// console.log("1 is not present")//ye return krega true ya false

//check krte hai ispe for of loop lagta hai ki nhi kyuki jitne bhi itterale hai us sb pe lagta hai

// const items=['items1','items2','items3']
// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);

// for (let item of numbers){
//     console.log(item);
// }

// sets tab use krenege jab hum jaante ho ki wo unique hai or ek time ke baad dusri time nhi aa skti hai

// const myArray=[1,2,4,4,5,6,5,6];
// const uniqueElements=new Set(myArray)

// let length=0;
// for (Element of uniqueElements)
// {
//     length++;
// }
// console.log(uniqueElements)
// console.log(length);