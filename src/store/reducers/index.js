import { combineReducers } from "redux";

import appReducer from "./app.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  search: searchReducer
});

export default rootReducer;
