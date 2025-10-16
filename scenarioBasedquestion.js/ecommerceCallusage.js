const product1 = { name: "Laptop", price: 70000 };
const product2 = { name: "Computer", price: 50000 };
const product3 = { name: "Mobile", price: 20000 };

function showDetails(product) {
  console.log(`Product:${this.name},Price:${this.price}`);
}

showDetails.call(product1);
showDetails.call(product2);
showDetails.call(product3);
