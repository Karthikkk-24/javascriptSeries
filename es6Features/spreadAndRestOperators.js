// Spread and Rest Operators

const numbers = [1, 2, 3];

console.log(...numbers); // 1 2 3

const additionalNumbers = [4, 5, ...numbers];

console.log(additionalNumbers); // [4, 5, 1, 2, 3]