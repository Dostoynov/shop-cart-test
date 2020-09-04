import { ADD_TO_CART, REMOVE_FROM_CART } from '../requestActions';
import { Product } from '../types/productTypes';
import { Dispatch } from '@reduxjs/toolkit';

export const addToCart = (product: Product) => (dispatch: Dispatch, getState: any) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x: any) => { // TODO: change type
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product: Product) => (dispatch: Dispatch, getState: any) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x: any) => x._id !== product._id);  // TODO: change type
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
