import { createAction, props } from "@ngrx/store";
import { User } from "../shared/model/user.model";
import { Action } from '@ngrx/store'


export const getUserInfo = createAction(
      '[UserInfo] Get User Info',
      props<{userEmail: string}>()
  );

export const getUserInfoSuccess = createAction(
     '[UserInfo] Get User Info success',
      props<{ user: User }>()
  );

export const getUserInfoFailure = createAction(
    '[UserInfo] Get User Info failure',
    props<{ error: string }>()
  );

