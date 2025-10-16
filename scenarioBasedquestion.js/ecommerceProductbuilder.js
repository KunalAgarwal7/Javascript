function product(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.getInfo = function () {
    console.log("Product id is:" + this.id);
    console.log("Product name is:" + this.name);
    console.log("Product price is:" + this.price);
    console.log();
  };
}

const pencil = new product(100, "Natraj", 10);
const pen = new product(101, "Cello", 20);
const noteBook = new product(102, "Classmate", 100);

pencil.getInfo();
pen.getInfo();
noteBook.getInfo();
