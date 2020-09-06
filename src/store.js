import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./reducers/productsReducer";
import {cartReducer} from "./reducers/cartReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
      products: productsReducer,
      cart: cartReducer,
      // order: orderReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
