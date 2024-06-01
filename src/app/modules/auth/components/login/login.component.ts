import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { LoginService } from 'src/app/services/auth/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginBreadCrumbData: Ibreadcrumb = {
    prev: 'home',
    title: 'my account',
  };

  email: string | undefined;

  public isPasswordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  constructor(private _LoginService: LoginService, private _Router: Router) {}

  errorMsg: string = '';
  isLoading: boolean = false;
  passwordPattern = '/^(?=.[A-Z].)(?=.[!@#$&])(?=.[0-9])(?=.*[a-z]).{8,32}$/';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
  });
  login(): void {
    if (this.loginForm.valid) {
      // this.isLoading = true;
      this._LoginService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success == true) {
            // this.isLoading = false;
            localStorage.setItem('eToken', response.token);
            this._LoginService.saveUserData();
          }
        },
        error: (err: HttpErrorResponse) => {
          // this.isLoading = false;
          console.log(err);
          console.log(err.error.message);
          this.errorMsg = err.error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
