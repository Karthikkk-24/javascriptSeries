// Promises 

const fetchData = fetch('https://jsonplaceholder.typicode.com/todos/1');

fetchData.then(response => {
    (response.json()).then(data => {
        console.log(data);
    }).catch(error => {
        console.error('Error: ', error);
    })
})