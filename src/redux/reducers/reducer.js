/* eslint-disable no-case-declarations */

const INIT_STATE = {
  carts: [],
  login: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      console.log(action.payload);
      const existingItem = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        carts: [...state.carts, { ...action.payload, quantity: 1 }],
      };

    case "DELETE_CART":
      console.log(action.payload);
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export const loginReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      console.log(action.payload);
      return {
        ...state,
        login: [...state.login, action.payload],
      };

    case "LOG_OUT":
      console.log(action.payload);
      return {
        ...state,
        login: state.login.filter((item) => item.id === action.payload.id),
      };

    default:
      return state;
  }
};
