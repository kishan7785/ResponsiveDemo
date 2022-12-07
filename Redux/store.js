import rootReducer from "./Reducer";
import { createStore } from "redux";

export const store = createStore(rootReducer);
