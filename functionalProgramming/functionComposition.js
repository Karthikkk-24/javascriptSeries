// Simple Function

const add = x => x + 1;
const multiply = x => x * 2;

// Function Composition

const compose = x => multiply(add(x));

console.log(compose(10)); // 22