// Constructor Function

function vehicle(vehicleName, wheels) {
    this.vehicleName = vehicleName;
    this.wheels = wheels;
}

const car = new vehicle('BMW', 4);
const kawasaki = new vehicle('Kawasaki', 2);

console.log(car); // { vehicleName: 'BMW', wheels: 4 }

console.log(kawasaki); // { vehicleName: 'Kawasaki', wheels: 2 }