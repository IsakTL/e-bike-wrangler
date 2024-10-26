// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin,
    this.color = color,
    this.make = make,
    this.model = model,
    this.year = year,
    this.weight = weight,
    this.topSpeed = topSpeed;
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()]
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the wheelie method
  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // Override the printDetails method from the Vehicle class
  // Logs details of parent class via super and own details
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
