import { createStore, combineReducers } from "redux";

import { spinnerReducer } from "./reducer/spinner-reducer.js";
import { authReducer } from "./reducer/auth-reducer.js";
import { newsReducer } from "./reducer/news-reducer.js";

const allReducers = combineReducers({
  spinnerReducer,
  authReducer,
  newsReducer
});

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
