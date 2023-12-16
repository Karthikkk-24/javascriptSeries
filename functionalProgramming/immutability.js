// Immutability

let arr1 = [1, 2, 3];
console.log(arr1); // [1, 2, 3]

arr1.push(4);

let arr2 = [1, 2, 3];
let arr3 = [...arr2, 4];

console.log(arr2); // [1, 2, 3]
console.log(arr3); // [1, 2, 3, 4]