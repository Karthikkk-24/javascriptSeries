// Iterating array elements

const numbers = [1, 2, 3, 4, 5, 6];

for (let number of numbers) {
    console.log(number); // 1 2 3 4 5 6
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // 1 2 3 4 5 6
}

numbers.forEach((number) => {
    console.log(number); // 1 2 3 4 5 6
});