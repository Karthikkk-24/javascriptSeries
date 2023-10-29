// Enhanced Object Literals

const name = 'Karthik';
const age = 21;

const obj = {
    name,
    age,
    greetings() {
        console.log(`Hello World!`);
    }
}

console.log(obj); // { name: 'Karthik', age: 21, greetings: [Function: greetings] }