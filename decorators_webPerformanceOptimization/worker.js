// Worker File

onmessage = function(e) {
    console.log('Received message in worker', e.data);
    postMessage('Hello World!');
}