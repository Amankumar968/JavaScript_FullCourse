
//get->kuchh read krna hai
//post->kuchh data create krna hia
//put->kuchh data pehle se the use change krna hai update krna 
//patch->kuchh data hai usme thora sa change krna hai pura nhi

//delete->data delete krna hai


// The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.
// UNSENT
// The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

// OPENED
// open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

// HEADERS_RECEIVED
// send() has been called, all redirects (if any) have been followed and the response headers have been received.

// LOADING
// Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

// DONE
// The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.



//NOTE (uper dekh)
// xhr open krne se pehle url par 0 rahega
// fir 1 rahega;

//humko response chahiye url ka iske liye ready state ko 4 honga hoga fir milega
// const URL="https://jsonplaceholder.typicode.com/posts"


// const xhr=new XMLHttpRequest();
// // console.log(xhr);
// xhr.open("GET",URL)
// xhr.onreadystatechange=function()//browser es function ko us time call krega jab iski ready state change hogi
// {
//     if(xhr.readyState===4)
//     {
// // console.log(xhr.response); 
// //agar console.log(typeof(xhr.response)) to string aaega.json me response aa raha hai


//     }
// //ye browser dekhega
// }
// xhr.send();


/**********Ye humko js ke object mein chahiye */

// const URL="https://jsonplaceholder.typicode.com/posts"

// const xhr=new XMLHttpRequest();

// xhr.open("GET",URL)

// xhr.onreadystatechange=function()
// {
//     if(xhr.readyState===4)
//     {
//       const response=xhr.response;
//       const data=JSON.parse(response);//ye response string me tha ab ye JSON ke help se ab js ke object mein dikhega

//       //console.log(data);
//     //   console.log(typeof data)
//     }
// }

// xhr.send();


/**************HTTPS STATUS CODE *///
//400 client error
//200 success
//300 redirection
//500 server error

/**************implement code jo pehle likha hai  */
//onload ->ye tabhi chalega jab humari ready state 4 ho jaegi ,humko alag se if condition nhi lagana if(onreadystate==4)

const URL="https://jsonplaceholder.typicode.com/posts"


const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
XPathResult.onload=function()
{
   const response=xhr.response;
   const data=JSON.parse(response);
   console.log(data);
}

xhr.send();