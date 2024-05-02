const redux = require("redux");
// make a initail state

const initialState = {
  value: 0,
};

//makes a action

const IncrementValue = () => {
  return {
    type: "INCREMENT",
  };
};

const Decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reset action
const Reset = () => {
  return {
    type: "RESET",
  };
};

// make s reducer function

const INCREDECRREDUCER = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RESET":
      return {
        ...state,
        value: (state.value = 0),
      };
    default:
      return state;
  }
};

const { createStore } = require("redux");
const store = createStore(INCREDECRREDUCER);
store.subscribe(() => {
  console.log(store.getState());
});

// acition dispatch

store.dispatch(IncrementValue());
store.dispatch(IncrementValue());
store.dispatch(IncrementValue());
store.dispatch(IncrementValue());
store.dispatch(Decrement());
store.dispatch(Reset());
