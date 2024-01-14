// Class Decorators

function addGreeting(constructor) {
    constructor.prototype.greet = function () {
        console.log(`Hello ${this.name}`); // Hello Karthik
    }

    return constructor;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

addGreeting(Person); // Add

const person = new Person('Karthik');
person.greet();