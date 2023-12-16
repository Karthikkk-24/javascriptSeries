// Pure Functions

let x = 10;

// Impure Functions
function impureAddFn(y) {
    x = x + y;
    return x;
}

// Pure Functions
function pureAddFn(x, y) {
    return x + y;    
}

console.log(impureAddFn(5)); // 15
console.log(pureAddFn(5, 10)); // 15