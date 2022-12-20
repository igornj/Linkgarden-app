import { createReducer, on } from "@ngrx/store";
import { User } from "../shared/model/user.model";
import { getUserInfo, getUserInfoFailure, getUserInfoSuccess } from "./user-action";

export const initialState : User = {
  name: "",
  email: "",
  userAddress: "",
  password: "",
  profileImage: ""
};

export const reducers = createReducer(
  initialState,
  on(getUserInfo, (state) => ({...state})),
  on(getUserInfoSuccess, (state, action) => ({...state, userInfo: action.userinfo})),
  on(getUserInfoFailure, (state) => ({...state}))
);
