//humko navbar ka color green aur background white krna hai ek sath


//HTML COllection ke sath for each loop use nhi kr skte hai

// const navItems=document.getElementsByTagName("a");

// for (let i=0;i<navItems.length;i++)
// {
//        const navitemelement=navItems[i];
//        navitemelement.style .backgroundColor="red";
//        navitemelement.style.color="green";
// }

//for of
// for (let navItem of navItems)
// {
//        const navitemelement=navItems[i];
//        navitemelement.style .backgroundColor="red";
//        navitemelement.style.color="green";
// }

//pehle jab html collection tha tab hum for each use nhi krskte the lekin ab change kr diye hai  array me nich to for eacch work krega

//To change html collection to array
let navItems = document.getElementsByTagName("a");

// Convert HTMLCollection to an array
navItems = Array.from(navItems);

// Apply styles using forEach loop
navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
});
