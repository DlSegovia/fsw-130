import { createStore } from "redux";
import reducer from "./reducer";

//this is where the store is created.
const store = createStore(reducer);
export default store;

