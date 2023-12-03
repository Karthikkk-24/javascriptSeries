// Constructor Pattern

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const BMW = new Vehicle('BMW', 'X5', 2020);
const Audi = new Vehicle('Audi', 'Q7', 2021);

console.log(BMW); // Vehicle { make: 'BMW', model: 'X5', year: 2020 } 
console.log(Audi); // Vehicle { make: 'Audi', model: 'Q7', year: 2021 }