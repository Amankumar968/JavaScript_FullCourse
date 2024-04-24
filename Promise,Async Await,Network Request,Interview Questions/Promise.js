//promise
// promise represent krta hai future value

//promise array like object hai jiske andar status aur value rehta hai
// jo value abhi nahi pata thori der baad pata chalega

//mein promise kiya ki fride rice banaunga
//abhi mene banaya nhi hai abhi kar hi rahe saman sb ek jagah to value kuchh nhi hai status panding hai

//ab jab hum kichen me gaye to dekhe vegetable hai rice hai salt isse to
//fried rice ban sakta hai to hum bana denge ab hum status dekhenge to wo fullfill rahega ,value friedrice

//ek aur case aa skta hai ki banane gaya fried rice lekin bucket me salt hai hi nhi to fried rice to ban hi nahi paega isliye status:reject aur value hum kuch vhi daal skte hail salt is not in bucket

// const bucket = ["coffes", "chips", "vegetable",  "rice"];

// //humlog ne promise produce kiya hai abhi 32line se conjume krenge promise ko
// const friedRicePromise = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("vegetable") &&
//     bucket.includes("salt") &&
//     bucket.includes("rice")
//   ) {
//     resolve("Fried rice"); // eske andar kuch bhi ho skta hai [],{value:"friedRice"},""
//   } else {
//     reject("Something missing from bucket"); //eske andar new Error("")object bhi ho skta hai array object kuchh bhi ho skta hai
//   }
// });

// //ab hum promise ko consume krenge ,BROWSER CONSUME KREGA es niche waale code ko

// //how to consume
// // friedRicePromise.then(
// //   (myfriedrice) => {
// //     //ye myfriedrice jo hai wo upar se resolve hoke jo aaega uska wo place le raha hai
// //     console.log("lets eat", myfriedrice);
// //   },
// //   (error) => { //ye error lagana jaruri nhi hai agar nhi lagange to eska matlab hai ki hm care nhi kiye agar kuchh bhi error aata hai to like bucket me rice hai nhi aur fried rice banane jaa rahe us time jo reject ke andar likha hai wo chalega
// //     console.log(error); ///yaha pe jo error reject se aaega wo get krega
// //   }
// // );


// //hum reject jagah catch lagake uske sath chaining kr skte hai
// friedRicePromise.then(
//     (myfriedrice) => {
//       //ye myfriedrice jo hai wo upar se resolve hoke jo aaega uska wo place le raha hai
//       console.log("lets eat", myfriedrice);
//     },

//     ).catch((error)=>{  //yeha  pe jo error reject se aaega wo get kar lega msg dikhaega agar esko hata de to error dega 
//         console.log(error);
//     }
//   );


  /**************************YE BHI ASYNCHRONOUSE HI HAI */
  
// const bucket = ["coffes", "chips", "vegetable","salt" , "rice"];

// const friedRicePromise = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("vegetable") &&
//     bucket.includes("salt") &&
//     bucket.includes("rice")
//   ) {
//     resolve("Fried rice"); // eske andar kuch bhi ho skta hai [array],{value:object},"string"
//   } else {
//     reject("Something missing from bucket"); //eske andar new Error("")object bhi ho skta hai array object kuchh bhi ho skta hai
//   }
// });

//ab hum promise ko consume krenge ,BROWSER CONSUME KREGA es niche waale code ko

//how to consume
// friedRicePromise.then(
//   (myfriedrice) => {
//     //ye myfriedrice jo hai wo upar se resolve hoke jo aaega uska wo place le raha hai
//     console.log("lets eat", myfriedrice);
//   },
//   (error) => { //ye error lagana jaruri nhi hai agar nhi lagange to eska matble hai ki hm care nhi kiye agar kuchh bhi error aata hai to like bucket me rice hai nhi aur fried rice banane jaa rahe us time jo reject ke andar likha hai wo chalega
//     console.log(error); ///yaha pe jo error reject se aaega wo get krega
//   }
// );



// //hum reject jagah catch lagake uske sath chaining kr skte hai
// friedRicePromise.then(
//     (myfriedrice) => {
//       //ye myfriedrice jo hai wo upar se resolve hoke jo aaega uska wo place le raha hai
//       console.log("lets eat", myfriedrice);
//     },

//     ).catch((error)=>{  //yeha  pe jo error reject se aaega wo get kar lega msg dikhaega agar esko hata de to error dega 
//         console.log(error);
//     }
//   );

  
// for (let i=0;i<=100;i++)
// {
//   console.log(Math.random(),i)
// }

// console.log("script end !!!");

/**********************USing settime out */
  //note settime out aur promise mein pehle promise chalegi fir settimeout  kyuki settime out store hota hai callback queue mein aur aur promise catch sb store hota hai microtask queue mein esiliye pehle promise fir setimeout ka data 


const bucket = ["coffes", "chips", "vegetable","salt" , "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetable") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fried rice"); 
  } else {
    reject("Something missing from bucket");
  }
});


//how to consume


friedRicePromise.then(
    (myfriedrice) => {
     
      console.log("lets eat", myfriedrice);
    },

    ).catch((error)=>{  
        console.log(error);
    }
  );

  

  setTimeout(()=>{
    console.log("set timemout");
  },0)
for (let i=0;i<=100;i++)
{
  console.log(Math.random(),i)
}

console.log("script end !!!");
