const initialState = {
  errors: {},
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, isFetching: true };
    default:
      return state;
  }
};

export default errorReducer;
