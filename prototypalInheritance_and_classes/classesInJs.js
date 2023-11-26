// Classes in JavaScript

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.makeSound = function () {
    console.log('Vroom Vroom!!!'); // Vroom Vroom!!!
}

const BMW = new Car('BMW', 'X5', 2020);
console.log(BMW); // Car { make: 'BMW', model: 'X5', year: 2020 }

BMW.makeSound();