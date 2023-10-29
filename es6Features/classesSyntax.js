// Class Syntax

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const karthik = new Person('Karthik', 'Shettigar');

console.log(karthik); // Person { firstName: 'Karthik', lastName: 'Shettigar' }