const users = [
  { id: 1, name: "Amit", email: "amit@gmail.com" },
  { id: 2, name: "Riya", email: "riya@gmail.com" },
  { id: 3, name: "Karan", email: "karan@gmail.com" },
];

const orders = [
  { orderId: 101, userId: 1, product: "Laptop", amount: 45000 },
  { orderId: 102, userId: 3, product: "Mobile", amount: 18000 },
  { orderId: 103, userId: 4, product: "Tablet", amount: 12000 }, // invalid user
];

let idArray = [];
orders.forEach((order) => {
  let flag = users.some((user) => order.userId === user.id);

  if (!flag) {
    idArray = [...idArray, order.userId];
  }
});


console.log(idArray);
