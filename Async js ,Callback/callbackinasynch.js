//callbacks in asynchronouse

console.log("Hello world");

//ques is 1sec baad hellow world ke samene heading 1 aa jae
//ques is 2sec baad hello world ke samne heading 2 aa jae

// const heading1=document.querySelector(".heading1")
// const heading2=document.querySelector(".heading2")

// setTimeout(()=>{
// heading1.textContent="heading 1"
// heading1.style.color="red"
// console.log("first setitmeout")
// },1000)

// setTimeout(()=>{
//     heading2.textContent="heading 2"
//     heading2.style.color="yellow"
//     console.log("second timeout")
//     },1000)

//ye uppar waala code order mein nhi hai jese agar heading1 par koi jaake 4000sec kar diya tab fir nichee waale ko change kro uske according ordered way mein nhi hai

// const heading1=document.querySelector(".heading1")
// const heading2=document.querySelector(".heading2")

//ab dekhiye ye ab thik se kaam krega pehle heading1 change hoga uske 1sec ke baad heading2 change hoga uppar waale code mein 1000sec dono settimeout mein likhte the to wo saath mein hi dono ko print kr deta hai
// setTimeout(()=>{

// heading1.textContent="heading 1"
// heading1.style.color="red"
// setTimeout(()=>{
//     heading2.textContent="heading 2"
//     heading2.style.color="yellow"
//     },1000)
// },1000)

///NEXT EXAMPLE  callback HELL nestted callback
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

//Text            Delay             Color
//one               1s              violet
//two               2s              purple
//three             3s              red
//four              1s              pink
//five              2s              green
//six               3s              blue
//seven             1s              brown

// setTimeout(()=>{
//     heading1.textContent="one"
//     heading1.style.color="violet"

//     setTimeout(()=>{
//         heading2.textContent="two"
//         heading2.style.color="purple"
//         setTimeout(()=>{
//             heading3.textContent="three"
//             heading3.style.color="red"

//             setTimeout(()=>{
//                 heading4.textContent="four"
//                 heading4.style.color="pink"

//                 setTimeout(()=>{
//                     heading5.textContent="five"
//                     heading5.style.color="green"

//                     setTimeout(()=>{
//                         heading6.textContent="six"
//                         heading6.style.color="blue"

//                         setTimeout(()=>{
//                             heading7.textContent="seven"
//                             heading7.style.color="brown"
//                         },2000)
//                     },3000)
//                 },2000)
//             },1000)
//         },3000)

//     },2000)
// },1000)

///function ke help se yahi chij krenge (pyramid of dom)
//onFailure use krte hai agar element nhi hua tab ye chala denga
// function changeText(
//     element,
//     text,
//     color,
//     time,
//     onSuceessCallback,
//     onFailureCallback
// ) {
//     setTimeout(() => {
//         if (element) {
//             element.textContent = text;
//             element.style.color = color;
//             if (onSuceessCallback) {
//                 onSuceessCallback();
//             }
//         } else {
//             if (onFailureCallback) onFailureCallback();
//         }
//     }, time);
// }
//humko es 3s ke baad koi bhi koi kaam karana hai kaam karana hai

// changeText(
//     heading1,
//     "one",
//     "red",
//     1000,
//     () => {
//         changeText(
//             heading2,
//             "two",
//             "green",
//             2000,
//             () => {
//                 changeText(
//                     heading3,
//                     "three",
//                     "yellow",
//                     3000,
//                     () => {
//                         changeText(
//                             heading4,
//                             "four",
//                             "green",
//                             1000,
//                             () => {
//                                 changeText(
//                                     heading5,
//                                     "five",
//                                     "pink",
//                                     2000,
//                                     () => {
//                                         changeText(
//                                             heading6,
//                                             "six",
//                                             "violet",
//                                             1000,
//                                             () => {
//                                                 changeText(
//                                                     heading7,
//                                                     "seven",
//                                                     "red",
//                                                     2000,
//                                                     () => { },
//                                                     () => {
//                                                         console.log("heading 7 does not exist");
//                                                     }
//                                                 );
//                                             },
//                                             () => {
//                                                 console.log("heading 6 does not exist");
//                                             }
//                                         );
//                                     },
//                                     () => {
//                                         console.log("heading 5 does not exist");
//                                     }
//                                 );
//                             },
//                             () => {
//                                 console.log("heading 4 does not exist");
//                             }
//                         );
//                     },
//                     () => {
//                         console.log("heading 3 does not exist");
//                     }
//                 );
//             },
//             () => {
//                 console.log("heading 2 does not exist");
//             }
//         );
//     },
//     () => {
//         console.log("heading 1 does not exist");
//     }
// );
