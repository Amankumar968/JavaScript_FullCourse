/*********************FUNCTION DECLARATION */


// console.log("Happy Birthday..............");

//1.
// function birthdaysong()
// {
//     console.log("Happy Birthday....");
// }
// birthdaysong();
// birthdaysong();


//2.
// function twoplusfour()
// {
//     console.log(2+4);
// }
// twoplusfour();


//3.
// function twoplusfour()
// {
//    return 2+4;
// }
// console.log(twoplusfour());

// call,invoke ,run are same sound give
//dry -dont repeat your self


// 4.
// function twoplusfour()
// {
//    return 2+4;
// }

// const returnedValue=twoplusfour();
// console.log(returnedValue);




//5.
// function sumTwoNumber(number1,number2)
// {
//     return number1+number2;
// }

// const returnedValue=sumTwoNumber(4,5);
// console.log(returnedValue);



//6.
// function sumTwoNumber(number1,number2)
// {
//     return number1+number2;
// }

// const returnedValue=sumTwoNumber();//NAN
// console.log(returnedValue);//undefined+undefined=NAN


//7.

// function sumTwoNumber(number1,number2,number3)
// {
//     return number1+number2+number3;
// }

// const returnedValue=sumTwoNumber(2,3);//NAN
// console.log(returnedValue);//number+undefined=NAN



/*****************ADD THREE SUM WHERE USER TAKE INPUT************ */
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var num3 = prompt("Enter the third number:");

// // Convert strings to numbers
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// num3 = parseFloat(num3);
// var sum=0;

// function sumofthreenumber(num1,num2,num3)
// {
//    return num1+num2+num3;4
// }



// sum=sumofthreenumber(num1,num2,num3);

// console.log("sum of three number is "+sum);

/************************CHECK ODD EVEN */

// var num=prompt("Enter Number To Check Odd Even");

// num=parseFloat(num);

// function isEven(num)
// {
// if (num%2==0)
// {
//     console.log("Even")
// }
// else {
//     console.log("Odd");
// }
// }
// checkeven=isEven();
// console.log(checkeven);



/*********************QUESTION input:string output:firstcharacter of that string */

// var input=prompt("Enter String ");



// function firstcharacter(input)
// {
//     for (var i=0;i<input.length;i++)
//     {
//         return input[i];
//     }

   
// }

// ans=firstcharacter(input);
// console.log("First Character of this is " +ans);


////////////////////2nnd way to do
// function firstChar(anyString)
// {
//     return anyString[0];
// }
// console.log(firstChar("abc"));


/************************input :array,target(num) output :index of target if target preent in array */

// Initialize an empty array
// var inputSize=parseInt(prompt("How many numbers you want to give"));
// var input=[];

// for (let i=0;i<inputSize;i++)
// {
//     input[i]=parseFloat(prompt("Enter element of "+(i)));
// }
// 4
// var target=parseFloat(prompt("Enter No of target"));

// function checktarget(input,target)
// {
//     for (let i=0;i<inputSize;i++)
//     {
//         if (input[i]==target)
//         {
//             return i;
//         }
//     }
//     return console.log("There is no target in this array ");

// }
// ans=checktarget(input,target);
// console.log("Target of this at " +ans,"index");



/********2nd way */

// function findTarget(array,target)
// {
//     for (let i=0;i<array.length;i++)
//     {
//         if (array[i]==target)
//         {
//             return i;
//         }
//     }
//     return -1;
// }

// const myArray=[1,3,8,9]
// ans=findTarget(myArray,8);
// console.log(ans);
