class Car {
  constructor(brandV, modelV) {
    // this = {}
    this.brand = brandV;
    this.model = modelV;
    // return this
  }

  drive() {
    console.log('Driving ', this.brand);
  }
}

class ElectricCar extends Car {
  constructor(brandV, modelV, mileageV, colorV) {
    super(brandV, modelV);
    this.mileage = mileageV;
    this.color = colorV;
  }
}

const ironCar = new ElectricCar('ironmobile', 's', 1000, 'blue');

ironCar.drive();
