import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, from, map, mergeMap, of, switchMap } from "rxjs";
import { UserService } from "../shared/service/user.service";
import * as UserActions from './user-action';

@Injectable()
export class UserEffects {

  private userLoggedIn = localStorage.getItem("userLoggedIn") as string;

  getUserInfo$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.getUserInfo),
      switchMap(action =>
        from(this.userService.getUserInfo(action.userEmail).pipe(
          map(response => UserActions.getUserInfoSuccess({ user: response[0] })),
          catchError((error: any) => of(UserActions.getUserInfoFailure(error)))))
      )
    )
  );



  constructor(private action$: Actions, private userService: UserService) { }
}

