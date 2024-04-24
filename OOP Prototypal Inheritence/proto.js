// const obj1={
//     key1:"value1",
//     key2:"value2"
// }

// const obj2={
//     key3:"value3"

// }
// console.log(obj2.key3)// ye to hume output de daga lekin esime me agar hum chahte hai ki (obj2.key2) dikhae to undefined error dega.lekin hum nhi chahte error show ho hum chahte hai agar ye obj2 me key2 nhi mila hai to ye hume obj1 se dhundh ke key2 dikha de esi ka solution niche code me hai

//Aur hum empty object bhi create kr skte ha aur usme assign kr skte hai value

// const obj3={};
// obj3.key3="value3" // ye same data jaega obj2 jese

const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2=Object.create(obj1);
console.log(obj2)//ye to khali object hai
console.log(obj2.key2)
console.log(obj2);// ye prototype return krega like [[prototype]],__proto__ ye show hoga output me mean obj1 show hoga es prototype pe click krege to

console.log(obj2.__proto__)// proto referenct hai obj1 ka{key1: 'value1', key2: 'value2'} esprint hoga iske andar bhi prototype rahega 