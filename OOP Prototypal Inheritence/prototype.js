function hello()
{
    console.log("hello world")
}
//javascript function ==>function+object

//console.log(hello.name)

//you can add your own properties
//hello.myOwnProperty ="very unique value";
// console.log(hello.myOwnProperty);

// name property-->tells function name
//function provides more usefull properties (call,apply,bind).

// hello.prototype//{}->[function hume dete hai free m, space wo free space ->{} khali object hi prototype hai ]function hume dega hai khali space use hum prototype kehte hai usw hum use kr skte ese {key:"value1"} 

//ye {} khali kyu deta hai function ye isliye deta hai ki hum kuch add kr ske

hello.prototype.abc="abc"
hello.prototype.xyz="zy1";
hello.prototype.sing=function()
{
   return "la ala al" 
                }                //ye prototype sirf function hi provide krta hai 
 console.log(hello.prototype);               

 //jab hum function banate hai wo deta hai muft ka space jise hum kehte hai prototype ,jisse hum use kr skte hai kuchh add kr skte hai remove kr skte hai
 //console.log(hello.prototype)//ye ek construnctor return krega uske andar functions hoga
 //functions ke alawa or koi prototype provide nhi krta ,array object ye sb nhi krta hai


 //__proto__ya [[prototype]] jo tha wo reference tha wo chain create kr raha the jese function 2 me kuch nhi mila to hum by reference (object.creater (function 1 ko as reference bhej skte hai ki isme nhi mila to isme to hoga hi))
 //ye protype jo hai ye simple objecct hai jisme hum key value add kr skte hai