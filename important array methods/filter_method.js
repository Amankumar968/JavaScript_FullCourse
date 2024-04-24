const numbers=[1,2,4,7,9,2];

const isEven=function(number)//filter ka callback function hamesa return krna chahiye boolean like true or false;
{
    return number%2===0
}

console.log(numbers.filter(isEven))