//Object Destructuring

const band={
    bandName:"led zepplin",
    famousSong:"Stairway to heaven",
    year:1961,
    anotherNameSong:"kasmir",

};

const{bandName,famousSong,...restprops}=band;
// const bandm={bandName,famousSong,...restprops}

console.log(bandName,famousSong,restprops);

// console.log(bandName,restprops);
console.log(band)




// const bandName=band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName," ",famousSong);


// /******to change bandname, we want to initialize our name */

// const{bandName:bandbrand,famousSong:favoritesong}=band;
// console.log(bandbrand,favoritesong)}