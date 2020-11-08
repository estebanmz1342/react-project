/* eslint-disable no-fallthrough */
/* eslint-disable eqeqeq */
import * as actionTypes from "../actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      if (state.counter != 0) {
        return {
          counter: state.counter - 1,
        };
      }
    default:
      return state;
  }
};
export default reducer;
