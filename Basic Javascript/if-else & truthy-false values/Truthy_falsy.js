//truthy and falsy value

//falsy values

//false
//""
//null
//undefined
//0

// let firstName=""; //empty hai " "
// if(firstName)
// {
//     console.log(firstName);// ye empty hai firstname isliye ye else chalega
// }
// else{
//     console.log("firstName Kinda empty");
// }

// let firstName; // ye undefined hai
// if(firstName)
// {
//     console.log(firstName);// ye undefined hai firstname isliye ye else chalega
// }
// else{
//     console.log("firstName Kinda empty");
// }

// let firstName=/undefined/null/""/0; // ye sb me else chalega
// if(firstName)
// {
//     console.log(firstName);
// }
// else{
//     console.log("firstName Kinda empty");
// }

/*****************************ALL About Truthy */
//truthy
//"abc"
//1,-1;



// let firstName="Aman"; // ye true hai kyuki isme value hai
// if(firstName)
// {
//     console.log(firstName);
// }
// else{
//     console.log("firstName Kinda empty");
// }

let firstName=1/-1; // isme 1 aur -1 aaega output we know that if 0 than it false show
if(firstName)
{
    console.log(firstName);
}
else{
    console.log("firstName Kinda empty");
}
