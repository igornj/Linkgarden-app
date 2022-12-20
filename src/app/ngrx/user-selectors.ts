import { createSelector } from "@ngrx/store";
import { appStateInterface } from "../types/appState.interface";

export const selectFeature = (state: appStateInterface) => state.userInfo;

export const emailSelector = createSelector(selectFeature, (state) => state.email);

export const userSelectorSuccess = createSelector(selectFeature, (state) => {
  return state;
});

export const errorSelectorFailure = createSelector(selectFeature, (state) => state);
