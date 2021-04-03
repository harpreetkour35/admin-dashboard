import { actionTypes } from "../actions/index";

const initialState = {
  products: [
    { _id: 1, name: "John Doe", price: "500550512", description: "abcd" },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...action.product }],
      };

    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product, index) =>
          index === action.index ? { ...action.product } : product
        ),
      };

    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        list: state.products.filter((product, index) => index !== action.index),
      };

    default:
      return { ...state };
  }
};

export default productReducer;
