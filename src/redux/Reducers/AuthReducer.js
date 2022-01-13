import * as types from "../Actions/actionTypes";

const initialState = {
  user: [],
};

const ReducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    default:
      return state;
  }
};

export default ReducerFunction;
