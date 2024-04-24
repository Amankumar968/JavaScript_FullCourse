//get multiple elements using getElements by class name
//get multiple elements items using querySelectorAll


//humko navitems ke andar jo navitem hai us sb ko ek sath add krna hai kaise krenge

// const navItems=document.getElementsByClassName("nav-item") 
// console.log(navItems)
//ye html collection deta hai array like object hai mean indexing de skte hai a[0] like this also we find length


//wo saare nav-item jisko class diye hai nav-item print ho jaega 


//using querySelectorAll
const navItems=document.querySelectorAll(".nav-item")  //ye nodelist return krega lekin ye bhi array like object hai
console.log(navItems)
// console.log(navItems[1])