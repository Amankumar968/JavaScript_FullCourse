// function hello()
// {
//     console.log("hello world");
//     //koi bhi function ko call likh ke bhi call kr skte hai
// }

// hello.call();

/**************call ***********/

// const user1={
//     firstName:"Aman",
//     age:8,
//     about:function()
//     {
//         console.log(this.firstName,this.age);
//     }
// }


// const user2={
//     firstName:"ramesh",
//     age:9,
    
// }
// mujhee about function use krna hai user2 mein
// user1.about.call(user2); //ramesh 9
// user1.about.call();//undefined undefined aa jaega



/**************Parameter acces kr skte hai user1 function me joo hai function 2 me aa jaae *** */


// const user1={
//     firstName:"Aman",
//     age:8,
//     about:function(hobby,favMusician)
//     {
//         console.log(this.firstName,this.age,hobby,favMusician);
//     }
// }


// const user2={
//     firstName:"ramesh",
//     age:9,
    
// }

// user1.about.call(user2,"guitar","moazrt")


/***********outside function hai accesss kr skte hai using call */
// function about(hobby,favMusician)
// {
//     console.log(this.firstName,this.age,hobby,favMusician);
// }
// const user1={
//     firstName:"Aman",
//     age:8,

// }


// const user2={
//     firstName:"ramesh",
//     age:9,
    
// }

// about.call(user2,"guitar","moazrt")





/*****************************APPLY */
// function about(hobby,favMusician)
// {
//     console.log(this.firstName,this.age,hobby,favMusician);
// }

// const user1={
//     firstName:"harshit",
//     age:8,
// }

// const user2={
//     firstName:"mohit",
//     age:9,
// }

// //apply  bhi call jese hi kaam krti hai 
// // about.apply(user2,"guitar","bach") //error dega //apply me hum ese nhi kr skte hai waha hume array me pass krna hoga like about.apply(user2,["akd","kkdkd"]);
// about.apply(user2,["guitar","bach"])


/****************************Bind  */

// function about(hobby,favMusician)
// {
//     console.log(this.firstName,this.age,hobby,favMusician);
// }

// const user1={
//     firstName:"harshit",
//     age:8,
// }

// const user2={
//     firstName:"mohit",
//     age:9,
// }

// //ye bind function return krega ek function or useme value rahega
// const func=about.bind(user1,"guitar","bach")
// func()


/*****************Conclusion */

// const user1={
//     firstName:"Aman",
//     age:9,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
// }

// //dont do this mistake
// // const myfunc=user1.about;
// // myfunc(); not do like that

// const myfunct=user1.about.bind(user1)
// myfunct();