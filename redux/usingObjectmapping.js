const countHandelers = {
  INCREMENT: (state) => ({ count: state.count + 1 }),
  DECREMENT: (state) => ({ count: state.count - 1 }),
  RESET: (state) => ({ count: 0 }),
};

function countReducerObj(state = { count: 0 }, action) {
  const handel = countHandelers[action.type];
  return handel ? handel(state) : state;
}

let state2 = { count: 0 };

state2 = countReducerObj(state2, { type: "INCREMENT" });
console.log(state2);

state2 = countReducerObj(state2, { type: "INCREMENT" });
console.log(state2);

state2 = countReducerObj(state2, { type: "DECREMENT" });
console.log(state2);

state2 = countReducerObj(state2, { type: "RESET" });
console.log(state2);
