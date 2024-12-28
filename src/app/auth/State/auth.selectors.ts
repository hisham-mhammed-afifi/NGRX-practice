import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './reducers';

export const authSelector = createFeatureSelector<AuthState>(authFeatureKey);

export const selectUser = createSelector(authSelector, (state) => state.user);
