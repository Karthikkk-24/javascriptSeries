// Constant Time Complexity

// O(1)

const myArray = [1, 2, 3, 4, 5];
const targetValue = 2;

function findElement(arr, target) {
    return arr.indexOf(target);
}

console.log(findElement(myArray, targetValue)); // 1
