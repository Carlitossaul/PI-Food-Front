import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducer";
// import thunk from "redux-thunk";

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;
