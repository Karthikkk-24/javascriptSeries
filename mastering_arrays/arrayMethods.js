// Array Methods

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// length
console.log(numbers.length); // 5

// push
numbers.push(6);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

// pop
numbers.pop();
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// shift
numbers.shift();
console.log(numbers); // [ 2, 3, 4, 5 ]

// unshift
numbers.unshift(1);
numbers.unshift(0);
console.log(numbers); // [ 0, 1, 2, 3, 4, 5 ]

// concat
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = numbers1.concat(numbers2);
console.log(numbers3); // [ 1, 2, 3, 4, 5, 6 ]

// slice
const numbers4 = numbers3.slice(0, 3);
console.log(numbers4); // [ 1, 2, 3 ]

// splice
const numbers5 = numbers3.splice(0, 3);
console.log(numbers5); // [ 1, 2, 3 ]

// reverse
const numbers6 = numbers5.reverse();
console.log(numbers6); // [ 3, 2, 1 ]