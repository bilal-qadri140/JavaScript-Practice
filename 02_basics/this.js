// console.log(typeof this);

function myFunction() {
    const age = 23
    const salary = 25000

    console.log(this.age); // not working in functions
    console.log(this.salary);
}
// myFunction()

const user = {
    id: 123,
    isLoggedIn: true,
    name: {
        firstName: "bilal",
        lastName: "qadri"
    },
    fun: function () {
        console.log(`Name of user is ${this.name.firstName} ${this.name.lastName} and id is ${this.id}`);
    },
    fun2: () => {
        console.log(this); // {}
    }
}
// console.log(user.fun());
user.fun2()