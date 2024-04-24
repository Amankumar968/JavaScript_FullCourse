//1. 
//const user1={
//     firstName:"Aman",//eska kaam mhi hai av niche waale code ke liye
//     lastName:"jha",
//     email:"amanjha12082002@gmail.com",
//     age:2,
//     adddress:"Darbhanga (Bihar)",
//     about:function()
//     {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18:function()
//     {
//         return this.age>=18
//     }
// }

//2 . function create krta hai object return krta hai object
//or add key value pair
// function createuser(firstName,lastName,email,age,address)
// {
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address,
//    user. about=function()
//     {
//         return `${this.firstName} is ${this.age} years old`
//     }
//     user.is18=function()
//     {
//         return this.age>=18
//     }
//     return user;
// }

// const user1=createuser("aman","jha","amanjha182002@gmail.com",15,"Darbhanga(bihar)")
// console.log (user1);
// const is18=user1.is18();
// const about=user1.about();
// console.log(about)
// console.log(is18);


//2nd jo code hai wo sahi to hai but wo har baar method ko le raha hai jab jab object ko call krenge jo ki bohot saara memory assume krega hum chahte hai uska ek hi copy rahe kyu ki wo sbke liye same hi rehne waala hai.esliye eska solution niches hai

//3.
// const userMethods={ //ab hum alga se method bana diye hai 

//    about:function()
//     {
//         return `${this.firstName} is ${this.age} years old`
//     },
//  is18:function()
//     {
//         return this.age>=18
//     }

// }

// function createuser(firstName,lastName,email,age,address)
// {
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address 
//     //aur yaha pe mention kr denge
//     user.about=userMethods.about; //ye same nhi hai upper walle se ye address le rha hai refference le raha hai usermethods ka address kya hai
//     user.is18=userMethods.is18;

//     return user;
   
// }

// const user1=createuser("aman","jha","amanjha182002@gmail.com",15,"Darbhanga(bihar)")
// console.log (user1);
// console.log(user1.about())


//3 no jo code hai wo sahi to hai lekin usme ek problem yeh hai ki harchij ka pehle methods banao fir usme function ke help se initialize kro .kabhi kabhi agar hum bhul gaye initialize krna to issu ho jaega isse bachne ke liye (__proto__ ka use krte hai.proto kya krta hai wo reference le leta hai kisi code ko means agar uska kaam aane wala hai bas propt ke help se aasani se ho jaega )

//4.
// const userMethods={   

//        about:function()
//         {
//             return `${this.firstName} is ${this.age} years old`
//         },
//      is18:function()
//         {
//             return this.age>=18
//         }
    
//     }
    
//     function createuser(firstName,lastName,email,age,address)
//     {
//         const user=Object.create(userMethods); ///yaha pe hum prompt ka use kiye hai ->agar js ko koi bhi chij user me nhi milte to wo proto me dhundhti hai  proto ki value me userMethods set kiye hai usme dhundhta hai
//         user.firstName=firstName;
//         user.lastName=lastName;
//         user.email=email;
//         user.age=age;
//         user.address=address 
    
//         return user;
       
//     }
    
//     const user1=createuser("aman","jha","amanjha182002@gmail.com",15,"Darbhanga(bihar)")
//     console.log (user1);
//     console.log(user1.about())


//4. no ke code ko implement krte hai using proptype kyuki hum jaante hai jab function banta hai uske sath  hi ek protype return hota hai



    
    // function createuser(firstName,lastName,email,age,address)
    // {
    //     2 no.const user=Object.create(createuser.prototype);
    //     user.firstName=firstName;
    //     user.lastName=lastName;
    //     user.email=email;
    //     user.age=age;
    //     user.address=address 
    
    //     return user;
       
    // }
    // createuser.prototype.about=function()
    //      {
    //             return `${this.firstName} is ${this.age} years old`
    //      }

    //      createuser.prototype.is18=function()
    //              {
    //                  return this.age>=18
    //              }

                 
    // const user1=createuser("aman","jha","amanjha182002@gmail.com",15,"Darbhanga(bihar)")
    // console.log(user1)
    // console.log(user1.about())


    //prototype ek object hai 
    //proto jo hai wo referece jo bhi hum chain create krna chahte hai jese es file me nhi mila to dusre file me mil jaega like const user=Object.create(jo method refference me dena hai ki isme check kr le kahi isme ho)



    /******************Using new ab implement krenge upar waale code ko */
//new 3 kaam karti hai
//1.empty object create krta hai use this ke equal rakhta hai aur uske andar sbkuch add kr deta hai this={}

//2.return {} or ye line new keyword khud krke dega
/// const user=Object.create(createuser.prototype);

    

    //constructor function ese keh skte hai
    //agar hum future me use new keyword ke help se use krne waale hai to function jo hao wo capital letter me rahega
    // function Createuser(firstName,lastName,email,age,address)
    // {
        
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    //     this.email=email;
    //     this.age=age;
    //     this.address=address 

       //new keyword khud se return krta hai isliye return nhi lagae hai

    // }
    // Createuser.prototype.about=function()
    //      {
    //             return `${this.firstName} is ${this.age} years old`
    //      }

    //      Createuser.prototype.is18=function()
    //              {
    //                  return this.age>=18
    //              }

                 
    // const user1= new Createuser("aman","jha","amanjha182002@gmail.com",15,"Darbhanga(bihar)")
    // console.log(user1)
    // console.log(user1.about())



    /************Ye createUser hum function bana ke bana rahe aur isme har baar method banana parta hai isse bahut lengthy ban jaata hai ye */

  class Createuser {
    constructor(firstName,lastName,email,age,address)//ye constructor humare liye object banaega

    {
      console.log("constructor called");
    this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address  
        //yaha pe return nhi krenge kuch kyuki ye khud object return kr dega
  }

  about()
  {
    return `${this.firstName} is ${this.age} years old `
  }
  is18()
  {
    return this.age>=18
  }
  sing()
  {
    return "la lala la"
  }
  func(a )
  {
    console.log(a);
  }
  }  

//bina new ke hum class constructor ko call nhi kr skte hai

    const user1= new Createuser("aman","jha","amanjha182002@gmail.com",15,"Darbhanga(bihar)")
    // console.log(user1.firstName);
    // console.log(user1. is18())
    // console.log(user1.about());
    console.log(Object.getPrototypeOf(user1))
    user1.func("Aman");
    