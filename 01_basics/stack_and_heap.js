// all premitive data types are stores in stack

let email = "bilal@gmail.com";

let email2 = email;
email2 = "qadri@gmail.com"

console.log(email);
console.log(email2);


// all non premitive data types are stores in heap

let user1 = {
    name: "bilal",
    addrress: "sahiwal"
}

let user2 = user1;
user2.name = "ali"
console.log(user1);
console.log(user2);