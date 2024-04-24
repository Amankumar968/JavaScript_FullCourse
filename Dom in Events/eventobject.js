//EVENT OBJECT

// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click",()=>{ //arrow function me this window object dega

//     console.log(this)
// })


// firstButton.addEventListener("click",function(){  //Normal function mein thhis button object return dega jo first button rahega wo show kr dega
    
//     console.log(this)
// })

//firstBuutton jo hai wo element hai js mein object banta hai

/**********************************BEGIN******************** */
//jab bhi hum kisi bhi element pe event listener add hoga

//js engine -->line by line execute karta hai
//browser -->js Engine+extra features
//browser->js engine +web  api-->html,css etc

//jab browser ko pata chala ki user ne event perform kia 
//jo hum listen kar rahe hai 
//wo do kaam krega broser

//1. callback function firstbutton uppar jo second program hai uske andar jo function hai wo js ko de dega
//2. us function ke sath jo us function mein likha rahega wo bhi information dega jese likha hai console.log(this)

//3 ye information hume object ke form me milega 

//now we learn arrow function uses

const allButtons=document.querySelectorAll(".my-button button")

for (let button of allButtons)
{
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget); 
    })
}