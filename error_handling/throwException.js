// Throw Exception

function division(a, b) {
    if (b === 0) {
        throw new Error("Division By Zero")
    }
    return a / b;
}

console.log(division(2, 0));