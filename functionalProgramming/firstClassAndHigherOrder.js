// First Class Function

const greeting = function() {
    console.log("Hello World!"); // Hello World!
}

function greetMore(greetingFunction) {
    greetingFunction();
}

greetMore(greeting);