export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const DELETE = (item) => {
  return {
    type: "DELETE_CART",
    payload: item,
  };
};

export const UPDATE_CART_QUANTITY = (item) => {
  return {
    type: "UPDATE_CART_QUANTITY",
    payload: item,
  };
};

export const LOGIN = (item) => {
  return {
    type: "LOG_IN",
    payload: item,
  };
};

export const LOGOUT = (item) => {
  return {
    type: "LOG_OUT",
    payload: item,
  };
};
