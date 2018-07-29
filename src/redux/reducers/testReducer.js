import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/testActions";

const initialState = {
  counter: 20
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default testReducer;
