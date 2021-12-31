//Part One - create class for vehicle instance with properties make, model, and year
//each vehicle instance should have access to a method called honk, which returns a string called "Beep."
//Each instance should have a method called toString which returns a string containing make model and year of the vehicle

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    };
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from the year ${this.year}`;
    }
}

const car1 = new Vehicle('Honda', 'Civic', 2016)

//Part Two - Create a class for a car. The car should inherit from Vehicle and each car instance should also have a property called numWheels which has the value of 4.

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year); 
        this.numWheels = 4;
    }
};
const car2 = new Car('Porsche', 'Cayanne', 2021)

//Part-Three - Create a class for Motorcycle. Class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns "VROOOM!".

class Motorcycle extends Car {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
};

const bike = new Motorcycle('Ducati', 'Scrambler', 2017)

//Part Four - create a Garage class that has a property called vehicles which stores an array of vehicles, and a property called capacity which is a number indicated how many vehicles will fit inthe garage. when garage is created, vehicles will always be empty and you only need to provide the capacity
// garage instance should also have an add method which adds a vehicle to the array of vehicles, however if you try to add something not a vehicle to the garage, it should return "Only vehicles are allowed in here!"
//If the garage is at capacity, it should say "Sorry, we are full"

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle) {
        if (!newVehicle instanceof Vehicle) {
            return "Only Vehicles are allowed in here!"
        }
        if (this.vehicles.lenght >= this.capacity) {
            return "Sorry we're full";
        }
        this.vehicles.push(newVehicle);
        return `Vehicle added! There are ${this.capacity - this.vehicles.length} spots left in the garage.`;        
    }
}
