class Animal {
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    eat()
    {
        return `${this.name} is eating`
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
// const animal1=new Animal("tom",2);
// console.log(animal1)
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());


/*******************I WANT TO CREATE ANOTHER CLASS using extends keywords */
class Dog extends Animal{
   bark()
   {
    return `${this.name} is barking`;
   }
constructor (name,age,speed)
{
    super(name,age);
    this.speed=speed
}
run()
{
    return `${this.name} is running at ${this.speed} kmph `
}
eat ()
{
    return  `Modified Eat :${this.name} is eating`
}
}

//object/instance same hai
const tommy=new Dog("tommy",3,45);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.bark());
console.log(tommy.run());