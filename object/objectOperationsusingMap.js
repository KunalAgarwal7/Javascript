let obj = {
  laptop: 80000,
  phone: 50000,
  tablet: 30000,
};

const arr = Object.entries(obj);

const arr2 = arr.map(([key, value]) => [key, value * 0.2]);

obj = Object.fromEntries(arr2);
console.log(obj);
