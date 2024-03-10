// Transforming Arrays

const numbers = [1, 2, 3, 4, 5];

// map function

const numbers2x = numbers.map((number) => number * 2);
console.log(numbers2x); // [ 2, 4, 6, 8, 10 ]

// filter function

const numbersEven = numbers.filter((number) => number % 2 === 0);
console.log(numbersEven); // [ 2, 4 ]