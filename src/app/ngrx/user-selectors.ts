import { createSelector } from "@ngrx/store";
import { appStateInterface } from "../types/appState.interface";
import { UserInfoState } from "./user-reducer";

export const selectUser = (state: appStateInterface) => state.user;

export const emailSelector = createSelector(selectUser, (state) => state);

export const userSelectorSuccess = createSelector(selectUser, (state: UserInfoState) => state.user);

export const errorSelectorFailure = createSelector(selectUser, (state) => state);
