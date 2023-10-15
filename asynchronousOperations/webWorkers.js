// Web Workers

const worker = new Worker('worker.js');

function handleWorkerResult(e) {
    console.log('Factorial:', e.data);
}

worker.addEventListener('message', handleWorkerResult);

const number = 6;

worker.postMessage(number);
