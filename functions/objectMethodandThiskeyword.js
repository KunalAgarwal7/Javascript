const car = {
  brand: "Toyota",
  getBrand() {
    return this.brand;
  },
};

const getBrand = car.getBrand;
console.log(getBrand());
