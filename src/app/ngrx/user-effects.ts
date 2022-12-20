import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { UserService } from "../shared/service/user.service";
import * as UserActions from './user-action';

@Injectable()
export class UserEffects {

  private userLoggedIn = localStorage.getItem("userLoggedIn") as string;

  getUserInfo$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(UserActions.getUserInfo),
        mergeMap((action) =>{
        return this.userService.getUserInfo(this.userLoggedIn).pipe(map(userinfo =>{
          return UserActions.getUserInfoSuccess({userinfo})
        }))
      }))
    }
  )



  constructor(private action$: Actions, private userService: UserService) { }
}

