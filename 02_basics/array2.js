const names1 = ["bilal","amir","usman"]
const names2 = ["umar","umair","nomi"]

// names1.push(names2)
// console.log(names1);
// console.log(names1[3]);

// const names3 = names1.concat(names2) // join all elements in new array
// console.log(names3);

// const newNames = [...names1,...names2] //spread all the elements and add into new array
// console.log(newNames);

// const arr = [1,2,3,[4,,5,6],3,[1,2,[7,8,9,[10,9,2]]]]

// console.log(arr.flat(Infinity)); // flate all the elements

console.log(Array.isArray("bilal"));
console.log(Array.from("bilal")); // convert into array