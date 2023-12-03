// Decorator Pattern

class Bike {
    price() {
        return 200000;
    }
}

class TVS {
    constructor (bike) {
        this.bike = bike;
    }

    price () {
        return this.bike.price() + 50000;
    }
}

const myBike = new TVS(new Bike());
console.log(myBike.price()); // 250000