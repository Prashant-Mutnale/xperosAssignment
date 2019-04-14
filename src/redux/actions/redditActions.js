import { REDDIT_POSTS } from "./types";
import { Actions } from "react-native-router-flux";

// fetch
export const reddit_posts = (category, limit) => dispatch => {
  console.log("got", category);
  console.log("gotlimit", limit);
  fetch("https://www.reddit.com/r/" + category + "/top.json?limit=" + limit)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: REDDIT_POSTS,
        payload: posts
      })
    );
};
