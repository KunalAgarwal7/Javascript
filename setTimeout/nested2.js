console.log("line 1");

setTimeout(() => {
  console.log("hello from outer settimeout 1");

  setTimeout(() => {
    console.log("hello from settimeout 2");

    setTimeout(() => {
      console.log("hello from settimeout 3");
    }, 8000);
  }, 3000);
}, 5000);

console.log("line 2");
