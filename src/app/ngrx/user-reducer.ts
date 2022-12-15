import { createReducer, on } from "@ngrx/store";
import { getUserInfo } from "./user-action";

export const initialState = '';

export const userReducer = createReducer(
  initialState,
  on(getUserInfo, (state) => state + 1)
);
