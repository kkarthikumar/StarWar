import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleWares = [thunk];
let enhancers = applyMiddleware(...middleWares);

if (process.env.NODE_ENV !== "production") {
  middleWares.push(createLogger());
  enhancers = composeWithDevTools(applyMiddleware(...middleWares));
}

const store = createStore(rootReducer, enhancers);

export default store;
