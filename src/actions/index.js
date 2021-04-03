export const actionTypes = {
  CREATE_PRODUCT: "product/create",
  UPDATE_PRODUCT: "product/update",
  DELETE_PRODUCT: "product/delete",
};

export function createProduct(product) {
  return (dispatch) => {
    return dispatch({ type: actionTypes.CREATE_PRODUCT, product });
  };
}

export function updateProduct(product, index) {
  return (dispatch) => {
    return dispatch({ type: actionTypes.UPDATE_PRODUCT, product, index });
  };
}

export function deleteProduct(index) {
  return (dispatch) => {
    return dispatch({ type: actionTypes.DELETE_PRODUCT, index });
  };
}
