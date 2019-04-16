import { createStore, combineReducers } from "redux";

import { spinnerReducer } from "./reducer/spinner-reducer.js";

const allReducers = combineReducers({
  spinnerReducer
});

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
