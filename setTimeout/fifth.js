function def() {
  setTimeout(() => {
    console.log("def");
  }, 1000);
}

function abc() {
  setTimeout(() => {
    console.log("abc");

    setTimeout(() => {
      console.log("inside abc");
    }, 2000);
  }, 1000);
}

function a1() {
  setTimeout(() => {
    console.log("a1");
  }, 5000);

  function a2() {
    setTimeout(() => {
      console.log("inside a1");
    }, 3000);
  }

  a2();
}

abc();

def();

a1();
