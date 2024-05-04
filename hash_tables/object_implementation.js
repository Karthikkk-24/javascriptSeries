// Hash Tables Implemented Using JavaScript Objects

const hashTable = {};

hashTable['name'] = 'Karthik';
hashTable['age'] = 22;
hashTable['city'] = 'Mumbai';

console.log(hashTable); // { name: 'Karthik', age: 22, city: 'Mumbai' }

console.log(hashTable['name']); // Karthik
console.log(hashTable['age']); // 22
console.log(hashTable['city']); // Mumbai

delete hashTable['city'];

console.log(hashTable); // { name: 'Karthik', age: 22 }

console.log(hashTable['city']); // undefined