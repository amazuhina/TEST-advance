import {combineReducers} from "@reduxjs/toolkit";
import {reducer as inputReducer} from "./slice";

export const rootReducer = combineReducers({
  inputReducer: inputReducer,
})
