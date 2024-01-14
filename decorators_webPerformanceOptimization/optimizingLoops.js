// Optimizing Loops

let arr = [1, 2, 3, 4, 5];

// Without Optimization
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3 4 5
}

// With Optimization
for (const item of arr) {
    console.log(item); // 1 2 3 4 5
}
