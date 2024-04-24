// class Person{


// constructor(firstName,lastName,age)
// {
//   this.firstName=firstName;
//   this.lastName=lastName;
//   this.age=age;
// }

// get fullName()
// {
//     return `${this.firstName} ${this.lastName}`
// }

// setName(firstName,lastName)
// {
//     this.firstName=firstName;
//     this.lastName=lastName
// }

// }
// const person1=new Person("aman","sharma",5);
// console.log(person1.lastName)
// console.log(person1.fullName)  //hum chahte hai fullname ko as a property use karu iske liye get keyword ka use krte hai fullname 


//using setname
// person1.setName("Aman ","jha")

// console.log(person1.fullName)
//ese bhi krskte hai
// person1.firstName="Rajesh"
// person1.lastName="Rohan"
// console.log(person1.fullName) 


/*************HUM Chahte hai ese person1.fullName="Aman jha" */

class Person{


    constructor(firstName,lastName,age)
    {
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;
    }
    
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    }
    
    // setName(firstName,lastName)
    // {
    //     this.firstName=firstName;
    //     this.lastName=lastName
    // }av ese nhii niche jesa hoga jo hum chahte hai
    

    set fullName(fullName){
        //fullName.split(" ")
        //[aman jha]

       const[firstName,lastName] =fullName.split(" ")
       this.firstName=firstName
       this.lastName=lastName;
    }
    
    
}

const person1=new Person("Aman","jha",8);
console.log(person1.fullName)
person1.fullName="mohit vashist"
console.log(person1.fullName)
