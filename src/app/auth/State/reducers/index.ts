import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
}

export const authInitialState: AuthState = {
  user: null,
};

export const authReducer = createReducer<AuthState>(
  authInitialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error }))
);
