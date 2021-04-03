import { combineReducers } from "redux";
import productReducer from "./productReducer";
import errorReducer from "./errorReducer";
import asyncReducer from "./asyncReducer";

const rootReducer = combineReducers({
  products: productReducer,
  errors: errorReducer,
  data: asyncReducer,
});

export default rootReducer;
