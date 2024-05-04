// Hash Tables Implemented Using JavaScript Maps

const hashTable = new Map();

hashTable.set('name', 'Karthik');
hashTable.set('age', 22);
hashTable.set('city', 'Mumbai');

console.log(hashTable); // { name: 'Karthik', age: 22, city: 'Mumbai' }

console.log(hashTable.get('name')); // Karthik
console.log(hashTable.get('age')); // 22
console.log(hashTable.get('city')); // Mumbai

hashTable.set('city', 'Delhi');

console.log(hashTable); // { name: 'Karthik', age: 22, city: 'Delhi' }

console.log(hashTable.get('city')); // Delhi

hashTable.delete('city');

console.log(hashTable); // { name: 'Karthik', age: 22 }

for (const [key, value] of hashTable) {
    console.log(key, value); // name Karthik, age 22
}