// Promises in JavaScript

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataToDisplay = Math.random();
            if (dataToDisplay > 0.5) {
                resolve(dataToDisplay);
            } else {
                reject('Low Data!');
            }
        }, 1000);
    });
}

// Promise Chaining

fetchData().then((data) => {
    console.log(data); // Random Number
    return Math.ceil(data);
}). then((newResult) => {
    console.log(newResult); // Ceil of Random Number
}). catch((error) => {
    console.log(error);
});