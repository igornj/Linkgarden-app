import { createAction, props } from "@ngrx/store";
import { User } from "../shared/model/user.model";

export const getUserInfo = createAction('[UserInfo] Get User Info');

export const getUserInfoSuccess = createAction('[UserInfo] Get User Info success', props<{userinfo: User}>());

export const getUserInfoFailure = createAction('[UserInfo] Get User Info failure', props<{error: string}>());
