import {createStore} from "redux";
import {reducer} from "../reducers/pizzaReducer";

export const store = createStore(reducer);
