//new Keyword kya krta hai ye niche hai
//1.)empty object this={} //this reffer kr raha hai empty object ko 
//2.)return this means empty object ko return krega // note-: function free me space deta hai wo object rehta hai konsa object prototype us prototype me add krskte hai function method kuch bhi 
//3.)
function createUser(firstName,age)
{
    this.firstName=firstName;
    this.age=age;
}
createUser.prototype.about=function()
{
    console.log(this.firstName,this.age);
}


const user1=new createUser("Rajesh",8);//proto hume prototype tak le jaega agar js ko kuch vhi user1 me nhi milega to wo prototype tak jaega prototype tak kon pahuchaega protot 
console.log(user1)//new 3 kaam kr raha hai
user1.about();