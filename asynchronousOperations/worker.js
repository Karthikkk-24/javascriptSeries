// Worker file for webWorkers.js

function calculateFactorial(number) {
    if (number <= 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

self.addEventListener('message', function(e) {
    const number = e.data;
    const result = calculateFactorial(number);

    self.postMessage(result);
});
