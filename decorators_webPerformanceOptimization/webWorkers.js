// Web Workers

const worker = new Worker('worker.js');

worker.postMessage('Main Thread!');

worker.onmessage = function(e) {
    console.log('Received message from worker', e.data);
}
