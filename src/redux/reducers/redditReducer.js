import { REDDIT_POSTS } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REDDIT_POSTS:
      console.log("got");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
