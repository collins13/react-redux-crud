import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";

// const middleWare = [...applyMiddleware(), thunk];
// const initialState = {};
// const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = configureStore(
//   rootReducer,
//   // middleware: middleware,
//   initialState,
// const middleWares = compose(
//   applyMiddleware(...[thunk]),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
const store = configureStore({
  reducer: rootReducer,
});
export default store;
