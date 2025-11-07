const obj = {
  name: "Kunal Agarwal",
  email: "mrkunal@gmail.com",
  password: "9784dkjbvijv",
};

const newObj = {};

for (let key in obj) {
  newObj[obj[key]] = key;
}

console.log(newObj);
