import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private _LoginService: LoginService, private _Router: Router,private toastr:ToastrService) { }

  errorMsg: string = '';
  isLoading: boolean = false;
  passwordPattern = /^(?=.[A-Z].)(?=.[!@#$&])(?=.[0-9])(?=.*[a-z]).{8,32}$/;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
  });
  login() {
    this._LoginService.login(this.loginForm.value).subscribe({
      next: (res) => {
        if (res.success == true) {
          localStorage.setItem('eToken', res.data.token);
          this.toastr.success('Logged In Successfully');
          this._Router.navigate(['/']);
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        console.log(err.error.message);
        this.errorMsg = err.error.message;
      },
    });

  }
}






