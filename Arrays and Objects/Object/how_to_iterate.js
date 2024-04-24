//How to iterate object
//two ways  to iterate object
//for in loop
//object.keys
const person ={
    name:"Aman",
    age:22,
    "person hobbies":["guitar","reading","movies"]

}

for(let key in person)
{
//  console.log( `${key} : ${person[key]}`);
console.log(key,":",person[key]);
}


console.log((Object.keys(person))); //array return krega

const val=Array.isArray((Object.keys(person)));
console.log(val);

for (let key of Object.keys(person))
{
    console.log(person[key]);
}