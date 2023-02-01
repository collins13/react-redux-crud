import { FETCH_POSTS, ADD_POSTS } from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};

export const addPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((post) =>
      dispatch({
        type: ADD_POSTS,
        payload: post,
      })
    );
};

// export default fetchPosts;
