const calculator = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) =>
   ( b == 0) ? { message: "Please enter valid number" } : a / b,
};

function calculatorReducer(state, action) {
  let helper = calculator[action.type.toLowerCase()];
  return helper ? helper(state.a, state.b) : { message: "Invalid type" };
}

let state = { a: 9, b: 0 };

let response = calculatorReducer(state, { type: "addition" });
console.log(response);

response = calculatorReducer(state, { type: "subTraCtion" });
console.log(response);

response = calculatorReducer(state, { type: "multiplication" });
console.log(response);

response = calculatorReducer(state, { type: "division" });
console.log(response);
