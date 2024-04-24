const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

// Define a function to change text with delay and color
function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("element not found");
            }
        }, time);
    });
}

//ye changetext promise return kr raha hai to promise pe then lagate hai
// const returnedPromise=changeText(heading1, "one", "violet", 1000)
   
// returnedPromise.then(()=>{
//     changeText(heading2, "one", "blue", 2000)

// })

//2nd way

changeText(heading1, "one", "violet", 1000)
.then(()=>{
    return changeText(heading2, "two", "blue", 2000)
})
.then(()=>{
    return changeText(heading3, "three", "blue", 3000)
})
.then(()=>{
    return changeText(heading4, "four", "green", 1000)
})
.catch((error)=>{
console.log(error);
})