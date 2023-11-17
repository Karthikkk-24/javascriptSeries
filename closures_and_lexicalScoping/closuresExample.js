// Closures Example

function outerFunction() {
    const name = "Karthik Shettigar";

    function innerFunction() {
        console.log(name);  // Karthik Shettigar
    }

    return innerFunction;
}

const closure = outerFunction();

closure();