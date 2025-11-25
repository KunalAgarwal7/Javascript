const data = [20, 40, 50, 60, 78, 45, 67, 88, 99, 30];

let res = data.reduce((obj, x) => {
  x > 50
    ? (obj["pass"] = obj["pass"] ? [...obj["pass"], x] : [x])
    : (obj["fail"] = obj["fail"] ? [...obj["fail"], x] : [x]);
  return obj;
}, {});

console.log(res);
