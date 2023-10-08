// Async/Await Operation

async function fetchSomeData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchSomeData();