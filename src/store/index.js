import { createStore} from "redux";
import createReducer from "./reducer/create-div-reducer";


export const store = createStore(createReducer)
