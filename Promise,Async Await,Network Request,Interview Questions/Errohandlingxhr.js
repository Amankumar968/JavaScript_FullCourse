
//ERROR HANDLING
// const URL="https://jsonplaceholder.typicode.com/posts"

// const xhr=new XMLHttpRequest();

// xhr.open("GET",URL)

// xhr.onload=function()
// {

//    if (xhr.status>=200 && xhr.status<300)
//    {

  
//    const response= xhr.response;
//    const data=JSON.parse(response);
   
//    console.log(data);
// }
// else{
//     console.log('something went wrong')
// }

// //to handle network error net band kr diye tab bhi

// xhr.onerror=()=>{
// console.log("network error")
// }

// }
// xhr.send();


/*************USING ID WE GET particular id DATA */


const URL="https://jsonplaceholder.typicode.com/posts"

const xhr=new XMLHttpRequest();

xhr.open("GET",URL);

xhr.onload=function()
{
    const response=xhr.response;
    const data=JSON.parse(response);
    console.log(data);
    const id=data[3].id;
    const xhr2=new XMLHttpRequest();

    const URL2=`${URL}/${id}`;
    console.log(URL2);
    xhr2.open("GET",URL2);

    xhr2.onload = function () {
        const response = xhr2.response;
        const data2 = JSON.parse(response);
        console.log(data2);
    }
    xhr2.send();
}

xhr.send();
