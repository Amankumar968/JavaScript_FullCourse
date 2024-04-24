//methods
//function inside object

// const person={
//     firstName:"harshit",
//     age:8,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`)
//     }
// }

// console.log(person.about());//this jo ha person hai this mean pura object pura object me firstName or age ki value le skte hai

//*****************Question 2nd way************ */

function personInfo()
{
    console.log(   `person name is ${this.firstname} and  age ${this.age}`);

}

const person1={
    firstname:"harshit",
    age:8,
    about:personInfo,
}

const person2={
    firstname:"mohit",
    age:18,
    about:personInfo
}

const person3={
    firstname:"nitish",
    age:17,
    about:personInfo
}
// personInfo();
console.log(person1.about())
console.log(person2.about())
console.log(person3.about())