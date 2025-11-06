function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

let state = { count: 0 };

state = counterReducer(state, { type: "INCREMENT" });
console.log(state);

state = counterReducer(state, { type: "INCREMENT" });
console.log(state);

state = counterReducer(state, { type: "DECREMENT" });
console.log(state);

state = counterReducer(state, { type: "RESET" });
console.log(state);
