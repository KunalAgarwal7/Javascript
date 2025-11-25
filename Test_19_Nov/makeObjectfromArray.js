const data = [2, 4, 5, 3, 6, 55, 76, 86, 45, 33, 65, 68, 9];

function outer(data) {
  return function () {
    let obj = data.reduce((acc, x) => {
      x % 2 === 0
        ? (acc["even"] = acc["even"] ? [...acc["even"], x] : [x])
        : (acc["odd"] = acc["odd"] ? [...acc["odd"], x] : [x]);
      return acc;
    }, {});

    return obj;
  };
}

let ans = outer(data);
console.log(ans());
