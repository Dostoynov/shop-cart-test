import {FETCH_POSTS} from "../actions/types";

export const redditReducer = (state = {} , action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
