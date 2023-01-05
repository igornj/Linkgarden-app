import { createReducer, on } from "@ngrx/store";
import { User } from "../shared/model/user.model";
import * as userAction from "./user-action";

export interface UserInfoState {
  user: User[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success'
}


export const initialState: UserInfoState = {
  user: [],
  error: 'null',
  status: 'pending'
};


export const userReducer = createReducer(
  initialState,
  on(userAction.getUserInfo, (state, { userEmail }) => ({
    ...state,
    userEmail: userEmail
  })),


  on(userAction.getUserInfoSuccess, (state, response) => ({
    ...state,
    user: [response.user],
    error: 'null',
    status: 'success'
  })),


  on(userAction.getUserInfoFailure, (state) => ({
    ...state,
    user: [],
    error: 'dale',
    status: 'error'

  }))
);
