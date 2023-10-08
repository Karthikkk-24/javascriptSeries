// Set Timeout Operation

let counter = 0;

window.addEventListener('load', () => {
    setTimeout(() => {
        counter++;
        console.log(counter);
    }, 1000);
});