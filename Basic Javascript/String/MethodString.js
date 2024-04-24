//trim()
//toUpperCase()
//toLowerCase()
//slice

/**************Using Let declared 2 Times************ */
// let firstName="     Aman       "
// console.log(firstName.length)//16
// let newString=firstName.trim(); //"Aman" new string dega
// console.log(firstName) //"     Aman       "
// console.log (newString);//Aman

// console.log (firstName.length);//16
// console.log(newString.length);//4

/***************************Let Not Declared 2 Times **********/
// let firstName="     Aman       "
// console.log(firstName.length)//16
//  firstName=firstName.trim(); //"Aman" new string dega
// console.log (firstName);//Aman
// console.log (firstName.length);//4

/********************To UpperCase**************** */
// let firstName="Aman";


// // firstName.toUpperCase();
// // console.log(firstName);//Aman;

//               //string immutable hai
// // firstName=firstName.toUpperCase()
// // console.log(firstName); //AMAN

/*****************************To  LowerCase******/
// let firstName="Aman";


// firstName.toLowerCase();
// console.log(firstName);//Aman;

//               //string immutable hai
// firstName=firstName.toLowerCase()
// console.log(firstName); //aman


/***************************To Slice********** */

//start index
//end index

let firstName="aman"
// let newString=firstName.slice(0,3) 
// console.log(newString)// ama 0-2 tak hi jaata hai 3 tak nhi

let newString=firstName.slice(1) //man 1st index se last tak chali jaegi
// console.log(newString)