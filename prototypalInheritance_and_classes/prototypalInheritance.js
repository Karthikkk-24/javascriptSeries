// Proptypal Inheritance

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                name: 'Karthik Shettigar',
                favoriteLanguage: 'JavaScript'
            };
            resolve(data);
        }, 2000);
    })
}

async function processData() {
    try {
        const data = await fetchData();
        console.log('Solution: ', data); // Solution:  { name: 'Karthik Shettigar', favoriteLanguage: 'JavaScript' }

    } catch (error) {
        console.log('Error: ', error);
    }
}

processData();