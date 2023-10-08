// Set Interval Operation

let counter = 0;

window.addEventListener('load', () => {
    setInterval(() => {
        counter++;
        console.log(counter);
    }, 1000);
});