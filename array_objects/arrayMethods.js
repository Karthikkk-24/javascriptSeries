// Array Methods

let numArray = [1, 2, 3, 4, 5];

console.log(numArray); // [ 1, 2, 3, 4, 5 ]

// push method 
numArray.push(6);

console.log(numArray); // [ 1, 2, 3, 4, 5, 6 ]

// pop method
numArray.pop();

console.log(numArray); // [ 1, 2, 3, 4, 5 ]

// shift method
numArray.shift();

console.log(numArray); // [ 2, 3, 4, 5 ]

// unshift method
numArray.unshift(1);
numArray.unshift(0);

console.log(numArray); // [ 0, 1, 2, 3, 4, 5]

// concat method
const numArray1 = [1, 2, 3];

const numArray2 = [4, 5, 6];

const numArray3 = numArray1.concat(numArray2);

console.log(numArray3); // [ 1, 2, 3, 4, 5, 6 ]

// slice method 
console.log(numArray.slice(1, 3)); // [ 1, 2 ]

// splice method
numArray.splice(2, 1);

console.log(numArray); // [ 0, 1, 3, 4, 5 ]

// forEach method

numArray.forEach((num) => {
    console.log(num);
});

// Output:-

// 0
// 1
// 3
// 4
// 5

// map method
const numArray4 = [1, 2, 3, 4, 5];

const numArray5 = numArray4.map((num) => {
    return num * 2;
});

console.log(numArray5); // [ 2, 4, 6, 8, 10 ]

// filter method
const numArray6 = [1, 2, 3, 4, 5];

const numArray7 = numArray6.filter((num) => {
    return num % 2 === 0;
});

console.log(numArray7); // [ 2, 4 ]

// reduce method
const numArray8 = [1, 2, 3, 4, 5];

const numArray9 = numArray8.reduce((total, num) => {
    return total + num;
});

console.log(numArray9); // 15

// sort method
const numArray10 = [3, 1, 5, 2, 4];

numArray10.sort();

console.log(numArray10); // [ 1, 2, 3, 4, 5 ]

// reverse method
const numArray11 = [1, 2, 3, 4, 5];

numArray11.reverse();

console.log(numArray11); // [ 5, 4, 3, 2, 1 ]