// Linearithmic Time Complexity

// O(n log n)

const myArray = [1, 2, 3, 4, 5];
const targetValue = 2;

function findElement(array, target) {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray.indexOf(target);
}

console.log(findElement(myArray, targetValue)); // 1