//maps object
//map is an iterable
//store data in ordered fashion

//store key value pair (like object)
//duplicate keys are not allowed like objects

//different between mapp and objects

//objects can only have string or symbol
//as key

//in map you can use anything as key 
//like array,numbers,string


// const person={
//     firstName:"Aman",
//     age:7,

// }
// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person['age'])
// for (let key in person)
// {
//     console.log(typeof key); //ye string me hai
// }

// key value pair

// const person=new Map()
// person.set('firstName',"aman");
// person.set('age',7);
// person.set(1,"one")  //map me key k help se hum key ko kuch bhi rakhskte hai array.....anytng
// console.log(person.get('firstName'));

// // hum array ko bhi age a key bana skte hai
// person.set([1,2,3],'oneTwoThree')
// person.set({1:'one'},'onetwothree')
// for (let key of person.keys())
// {
//     console.log(key,typeof key);
// }


//NOTE :- object me for in loop laga skte the lekin isme hum for of loop laga skte hai
// for (let [key,value] of person)
// {
//     console.log(key,typeof key);
//     console.log(Array.isArray(key));
//     console.log(key,value)
// }



// const person1={
//     id:1,
//     firstName:"Aman"
// }
// const userInfo=new Map();
// userInfo.set(person1,{age:45,address:"xyz street"});
//  console.log(userInfo.person1)

// console.log(person1.id);
// console.log(userInfo.get(person1))
// console.log(userInfo.get(person1).age)
// console.log(userInfo.get(person1).address)
// const person=new Map([['FirstName',"Aman"],["age",7]])
// console.log(person)