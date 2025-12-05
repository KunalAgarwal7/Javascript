console.log("hello from line 1");

function abc() {
  console.log("hello from abc line 1");

  setTimeout(() => {
    console.log("from settimeout");
  }, 2000);

  console.log("hello from abc line 2");
}

console.log("line 2 from gec");

abc();

console.log("line 3 from GEC");
