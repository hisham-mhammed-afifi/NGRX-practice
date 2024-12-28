import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[AUTH] login user',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[AUTH] login user Success',
  props<{ user: any }>()
);

export const loginFailure = createAction(
  '[AUTH] login user Failure',
  props<{ error: any }>()
);
