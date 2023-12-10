// Automatic Cleanup

function createObject() {
    let obj = {
        data: 'Hello'
    }

    return obj;
}

let result = createObject();
console.log(result);

// after this there is no need for the object to hold its memory so it'll be freed
