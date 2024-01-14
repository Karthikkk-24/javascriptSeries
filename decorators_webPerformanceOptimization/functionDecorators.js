// Function Decorators

function loopDecorator(func) {
    return function () {
        console.log('Function Call', func.name); // Function Call Add
        const result = func.apply(this, arguments);
        console.log('Function Result', result); // Function Result 3
        return result;
    }
}

function add(a, b) {
    return a + b;
}

const decoratedAdd = loopDecorator(add);
decoratedAdd(1, 2);