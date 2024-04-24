let numbers=[1,2,3];
//js ko ye methods prototype se milta hia
//lekin humlog to jante hai ki protype to sirf function ya constructor function ka hota hai lekin ye to array hai

//eska ans hai ki internally js array create krta hai ese -> let numbers =new Array(1,2,3) internally new keyword use krte hai fir array ka constructor call hota hai

console.log(Object.getPrototypeOf(numbers));
console.log(numbers)


// hum jaante hai ki prototype object return krta hai khali lekin hum use array me bhi change kr skte hai

function hello()
{
    console.log("hello")
}

console.log(hello.prototype);
hello.prototyp=[];
console.log(hello.prototype);
hello.push('1')