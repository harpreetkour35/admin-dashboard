import store from "../store";
import axios from "axios";

const URL = "http://localhost:3000/api/products";
export const fetch_product = () => {
  return {
    type: "FETCH_PRODUCT",
  };
};

export const receive_product = (product) => {
  return {
    type: "FETCHED_PRODUCT",
    data: product,
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR",
  };
};

export const add_product = (product) => {
  return {
    type: "ADD_PRODUCT",
    data: product,
  };
};

export const thunk_action_creator = () => {
  store.dispatch(fetch_product());
  return function (dispatch, getState) {
    return fetch("http://localhost:3000/api/products")
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receive_product(data));
      })
      .catch((err) => dispatch(receive_error()));
  };
};

export const action_creater = (data) => {
  return function (dispatch, getState) {
    return axios.post(URL, data).then((res) => {
      console.log(res.data);
      dispatch(add_product(res.data));
    });
  };
};
