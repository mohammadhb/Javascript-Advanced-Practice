//ES6+
class Shop{
    build(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

class Car {
    doors = 0;
    constructor(){}
    
    addParts() {
        this.doors = 4;
    };
    say() {
        console.log("I am a " + this.doors + "-door car");
    };
}

class Truck {
    doors = 0;
    constructor(){}
    
    addParts() {
        this.doors = 2;
    };
    say() {
        console.log("I am a " + this.doors + "-door truck");
    };
}

class CarBuilder {

    car = null;
    constructor(){}
    
    step1() {
        this.car = new Car();
    };

    step2() {
        this.car.addParts();
    };

    get() {
        return this.car;
    };
}

class TruckBuilder {

    truck = null;
    constructor(){}
    
    step1() {
        this.truck = new Truck();
    };

    step2() {
        this.truck.addParts();
    };

    get() {
        return this.truck;
    };
}

function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.build(carBuilder);
    var truck = shop.build(truckBuilder);

    car.say();
    truck.say();
}


//ES5
function Shop() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function () {
        this.car = new Car();
    };

    this.step2 = function () {
        this.car.addParts();
    };

    this.get = function () {
        return this.car;
    };
}

function TruckBuilder() {
    this.truck = null;

    this.step1 = function () {
        this.truck = new Truck();
    };

    this.step2 = function () {
        this.truck.addParts();
    };

    this.get = function () {
        return this.truck;
    };
}

function Car() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 4;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door car");
    };
}

function Truck() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 2;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door truck");
    };
}

function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);

    car.say();
    truck.say();
}
