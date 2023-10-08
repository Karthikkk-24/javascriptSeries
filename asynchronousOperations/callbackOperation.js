// Callback Operation

function fetchSomeData(callback) {
    setTimeout(() => {
        const data = {
            name: 'Karthik Shettigar',
            favoriteLanguage: 'JavaScript'
        };
        callback(data);
    }, 2000);
}

fetchSomeData(function (data) {
    console.log(data);
});

// Output:

// { name: 'Karthik Shettigar', favoriteLanguage: 'JavaScript' }