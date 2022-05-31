import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import shopReducer from "./reducers/shopReducer";

const store = createStore(
  shopReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);

export default store;
