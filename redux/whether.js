const whether = {
  Jaipur: (state) => ({
    Temperature: `Jaipur has ${state.Jaipur} degree celsius.`,
  }),
  Ajmer: (state) => ({
    Temperature: `Ajmer has ${state.Ajmer}degree celsius.`,
  }),
  Jodhpur: (state) => ({
    Temperature: `Jodhpur has ${state.Jodhpur} degree celsius.`,
  }),
  Udaipur: (state) => ({
    Temperature: `Udaipur has ${state.Udaipur} degree celsius.`,
  }),
};

let state = {
  Jaipur: 30,
  Ajmer: 25,
  Jodhpur: 40,
  Udaipur: 15,
};

const whetherReducer = (state = {}, action) => {
  const ans = whether[action.city];
  return ans ? ans(state) : { message: "City not exist" };
};

const jaipur = whetherReducer(state, { city: "Jaipur" });
console.log(jaipur);

const ajmer = whetherReducer(state, { city: "Ajmer" });
console.log(ajmer);
