// Promises in JavaScript

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Karthik Shettigar');
        }, 2000);
    });
}