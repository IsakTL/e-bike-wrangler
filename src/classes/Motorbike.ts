// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
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

  wheelie(){
    console.log(`Motorbike ${this.make} ${this.model} does a wheelie!`)
  }

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
    console.log(
      `Front wheel: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Rear wheel: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
