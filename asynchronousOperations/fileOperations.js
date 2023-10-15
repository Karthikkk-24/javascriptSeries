// File I/O Operations

const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
    if (err){
        console.error(err);
        return;
    };
    console.log(data);
});