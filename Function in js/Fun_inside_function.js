/*******************FUNCTION INSIDE FUNCTION */

const app = () => {

  const myinsidefunc = () => {
    console.log("Hello i am from insidefunction");
  };


  const addtwonumber = (num1, num2) => {
    return num1 + num2;
  };


  const iseven = (num) => {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }


  
  function myname()
  {
    console.log("HEllo my name Aman ")

  }

  const printstring=function (anystring)
  {
    return anystring[0]
  }


  console.log("Inside app");
  console.log(printstring("Abc"));
  myname();
  console.log(addtwonumber(4,5));
 const ans=addtwonumber(4,8);
  console.log(ans);
};
app();
