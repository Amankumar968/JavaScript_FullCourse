//Arrow FUnction 

const user1={
    firstName:"Aman",
    age:8,
    about:()=>{ //arrow function me jo this hota hai wo apne sorrounding se leta hai 
        console.log(this.firstName,this.age);
    }
}// arrow function ke this ko change nhi krskte hai

// const hellow=user1.about; hum ese bhi likh skte hai
// hellow();

user1.about()