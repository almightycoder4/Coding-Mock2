// NOTE: use this store variable to create a store.
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
//import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AppReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
