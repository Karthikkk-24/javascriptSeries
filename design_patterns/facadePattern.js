// Facade Pattern

class Car {
    drive() {
        console.log('Driving a car'); // Driving a car
    }
}

class Bike {
    drive() {
        console.log('Riding a bike'); // Riding a bike
    }
}

class vehicleFactory {
    constructor() {
        this.car = new Car();
        this.bike = new Bike();
    }

    driveCar() {
        this.car.drive();
    }

    driveBike() {
        this.bike.drive();
    }
}

const vehicleFacade = new vehicleFactory();
vehicleFacade.driveCar();
vehicleFacade.driveBike();