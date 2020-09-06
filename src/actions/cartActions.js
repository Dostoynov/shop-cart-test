import {ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART} from './types';

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((item) => {
    if (item._id === product._id) {
      alreadyExists = true;
      item.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.unshift({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const changeQuantity = (product, operation) => (dispatch, getState) => {
  let cartItems = getState().cart.cartItems.slice();
  cartItems.forEach((item) => {
    if (item._id === product._id) {
      operation === '-' ? item.count-- : item.count++;
    }
  });
  cartItems = cartItems.filter((item) => item.count >= 0);
  dispatch({ type: CHANGE_QUANTITY, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((item) => item._id !== product._id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
