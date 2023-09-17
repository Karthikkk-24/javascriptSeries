// Generator Function 

function* countNumbers() {
    for (let i = 0; i < 2; i++) {
        yield i;
    }
}

const counter = countNumbers();

console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: undefined, done: true }