const perosn = {
    firstName: "Bilal",
    lastName:"Qadri",
    age: 24,
    city: "sahiwal",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

// console.log(perosn);
// perosn.address = "140/9-L";
// perosn["edu"] = 16;
// console.log(perosn);

console.log(perosn.fullName());

// console.log(typeof (perosn));