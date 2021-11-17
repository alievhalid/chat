import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import contact from "./contact";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  contact: contact,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
