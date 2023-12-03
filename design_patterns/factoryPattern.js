// Factory Pattern

class Bike {
    ride() {
        console.log('Riding a bike'); // Riding a bike
    }
}

class Car {
    ride() {
        console.log('Driving a car'); // Driving a car
    }
}

class VehicleFactory {
    driveVehicle(type) {
        if (type === 'bike') {
            return new Bike();
        } else if (type === 'car') {
            return new Car();
        }
    }
}

const vehicleFactory = new VehicleFactory();
const bike = vehicleFactory.driveVehicle('bike');
const car = vehicleFactory.driveVehicle('car');

bike.ride();
car.ride();
