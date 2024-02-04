// Linear Time Complexity

// O(n)

const myArray = [1, 2, 3, 4, 5];
const targetValue = 2;

function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(findElement(myArray, targetValue)); // 1