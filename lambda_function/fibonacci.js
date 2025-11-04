const fibonnaci = (n) =>
  n == 1 || n == 0 ? n : fibonnaci(n - 1) + fibonnaci(n - 2);

console.log(fibonnaci(8));
