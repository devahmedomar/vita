import { Component } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/auth/register/register.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorMsg: string = '';
  isLoading: boolean = false;
  passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$&])(?=.*[0-9])(?=.*[a-z]).{8,32}$/;
  public isPasswordVisible: boolean = false;
  registerBreadCrumbData: Ibreadcrumb = {
    prev: 'home',
    title: 'my account',
  };
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.passwordPattern)
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern("[0-9 ]{11}")
    ]),
  });
  constructor(public _RegisterService: RegisterService, private _Router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  register(): void {
    this._RegisterService.registerNewUser(this.registerForm.value).subscribe({
      next: (response) => {
        if (response.success == true) {
          this.toastr.success('Registration successful!', 'Success');

          this._Router.navigate(['/auth/activate-account']);
        } else {
          this.errorMsg = response.message;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.handleError(err);
      }
    })


  }

  handleError(error: HttpErrorResponse): void {
    if (error.status === 400) {
      this.errorMsg = error.error.message || 'Bad Request. Please check your input.';
      this.toastr.error(this.errorMsg, 'Bad Request');
    } else {
      this.errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.toastr.error(this.errorMsg, 'Error');
    }
  }

}
