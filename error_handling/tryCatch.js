// Try Catch Block

const personDetails = {
    "name" : "Karthik",
    "age" : 21,
}

try {
    const parsedData = JSON.parse(personDetails);
    console.log(parsedData);
} catch (error) {
    console.log("Error: ", error);
}