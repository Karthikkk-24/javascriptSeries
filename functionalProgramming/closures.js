// Closures

function outerFunction(x) {
    return function(y) {
        return x + y;
    }
}


const closure = outerFunction(10);
console.log(closure(10)); // 20