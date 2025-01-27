import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./reducers/productsReducer";
import {cartReducer} from "./reducers/cartReducer";
import {redditReducer} from "./reducers/redditReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
      products: productsReducer,
      cart: cartReducer,
      reddit: redditReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
