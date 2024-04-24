//nested if else

// winning number 19

// 19 your guess is right;
// 17 to low;
// 23 too high.

let winningNumber=19;
let userGuess=+prompt("Guess a number")
console.log (typeof userGuess,userGuess) //string 20 prompt string dega ise number me lana hoga (+prompt)
if (userGuess==winningNumber)
{
console.log("Your guess is right");
}
else {
    if (userGuess<winningNumber)
{
     console.log("To Low")
}
else{
    console.log("To high")
}
}
