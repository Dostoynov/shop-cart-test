import { FETCH_PRODUCTS, RequestAction } from '../requestActions';
import { Dispatch } from '@reduxjs/toolkit';
import data from '../data.json'

export const fetchProducts = () => (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data.products,
  });
};

