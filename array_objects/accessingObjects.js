// Declaring Objects

const myObject = {
    firstName: 'Karthik',
    lastName: 'Shettigar',
    moreInfo: {
        age: 21,
        address: 'Mumbai',
        favoriteLanguage: 'JavaScript'
    }
}

console.log(myObject);
// { firstName: 'Karthik', lastName: 'Shettigar', moreInfo: { age: 21, address: 'Mumbai', favoriteLanguage: 'JavaScript' } }


// modification of object
myObject.moreInfo.favoriteLanguage = 'Java';

console.log(myObject);
// { firstName: 'Karthik', lastName: 'Shettigar', moreInfo: { age: 21, address: 'Mumbai', favoriteLanguage: 'Java' } }

console.log(myObject.moreInfo);
// { age: 21, address: 'Mumbai', favoriteLanguage: 'Java' }