// Promise Operation

function fetchSomeData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                name: 'Karthik Shettigar',
                favoriteLanguage: 'JavaScript'
            };
            resolve(data);
        }, 2000);
    });
}

fetchSomeData().then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
});

// Output:

// { name: 'Karthik Shettigar', favoriteLanguage: 'JavaScript' }