import { combineReducers } from "redux";
import { AppBarReducer } from "./AppBarReducer";

export const rootReducer = combineReducers({
  appbarTitle: AppBarReducer,
});
