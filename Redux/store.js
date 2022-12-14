import rootReducer from "./Reducer";
import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
const middleWare = [];
middleWare.push(thunk);
export const store = createStore(rootReducer, applyMiddleware(...middleWare));
