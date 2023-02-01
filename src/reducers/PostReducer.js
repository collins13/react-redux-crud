import { FETCH_POSTS, ADD_POSTS } from "../actions/types";

const initialState = {
  isLoading: false,
  items: [],
  item: {},
  error: null,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, items: action.payload };
    case ADD_POSTS:
      console.log("created");
      return { ...state, item: action.payload };
    default:
      return state;
    //   break;
  }
};

export default PostReducer;
