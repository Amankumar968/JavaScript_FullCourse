//Switch Statement

// let day=2;
// if (day===0)
// {
//     console.log("Sunday")
// }
// else if (day===1)
// {
// console.log("Monday")
// }
// else if (day===2)
// {
//     console.log("Tue")
// }
// else if (day===3)
// {
//     console.log("wed")
// }
// else if (day===4)
// {
//     console.log("thir")
// }
// else if (day===5)
// {
//     console.log("fri")
// }
// else if (day==6)
// {
//     console.log("sat")
// }
// else {
//     console.log("Wrong no please write the number between 0 and 6");
// }

let day = 2;

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Wrong number. Please write a number between 0 and 6.");
        break;
}
