//synchronous programming vs asynchronous programming

/*synchronous programming ->pehle ek kaam hoga fir dusra kaam hoga fir wo finish hoga uske baad 3sra kaam hoga  that's called synchronous*/

//js script single thread hai aur synchronous hai
console.log("script start");
for (let i=1;i<10000;i++)
{
    console.log("inside for loop");
}

console.log("script end");