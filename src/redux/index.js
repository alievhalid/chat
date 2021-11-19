import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import contact from "./contact";
import messages from "./messages";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  contact: contact,
  message: messages
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
