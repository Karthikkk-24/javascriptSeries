// Generator Function

function* generatorFunction() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const generator = generatorFunction();
console.log(generator.next().value); // 0;
console.log(generator.next().value); // 1;
console.log(generator.next().value); // 2;
console.log(generator.next().value); // 3;
console.log(generator.next().value); // 4;