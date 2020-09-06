import {ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART} from "../actions/types";

export const cartReducer = (
    state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
    action
) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case CHANGE_QUANTITY:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
