import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../State/auth.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface LoginCredentials {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup<LoginCredentials>({
    email: new FormControl<string>('hesham@email.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string>('12345678', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {}

  login() {
    const { email, password } = this.loginForm.value;
    if (this.loginForm.invalid) {
      return;
    }
    if (!email || !password) {
      return;
    }
    this.store.dispatch(AuthActions.login({ email, password }));
  }
}
