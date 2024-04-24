//Static methods and properties

//hum chahte hai ki object nhi banae uska directly call ho jae waha pe
class Person{


    constructor(firstName,lastName,age)
    {
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;
    }

    static classInfo()//ye methods hai
    {
        return 'this is person class  using static method '
    }

    //static properties 
    static desc="static property"
    
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    }
    


    set fullName(fullName){
        //fullName.split(" ")
        //[aman jha]

       const[firstName,lastName] =fullName.split(" ")
       this.firstName=firstName
       this.lastName=lastName;
    }
    
    
    eat()
    {
        return `${this.firstName} is eating`
    }

    isSuperCute()
    {
        return this.age<=1;
    }
    isCute()
    {
        return true;
    }
}

const person1=new Person("Aman","jha",8); //person1 ke pass sirf constructor se initialize jo hai wahi sb hai lekin *Person ke pass static method value hai jise bina object banae class ke help se call kr skte hai
console.log(person1.firstName)
console.log(person1.eat());
console.log(Person.classInfo());
console.log(Person.desc);
