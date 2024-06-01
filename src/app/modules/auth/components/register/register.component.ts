import { Component } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/auth/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public _RegisterService: RegisterService , private _Router: Router) {}
  registerBreadCrumbData: Ibreadcrumb = {
    prev: 'home',
    title: 'my account',
  };

  public isPasswordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  errorMsg: string = '';
  isLoading: boolean = false;
  passwordPattern = '/^(?=.[A-Z].)(?=.[!@#$&])(?=.[0-9])(?=.*[a-z]).{8,32}$/';
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
    phone: new FormControl(null, [
      // Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  handleForm(): void {
    console.log('donnne');
    console.log(this.registerForm.value);
    console.log(this._RegisterService.apiUrl);
    this._RegisterService.register(this.registerForm.value).subscribe({
      next: (response) => {
          
         
        console.log("go to login");
        this._Router.navigate(['/auth/login']);
      },
      error: (err: HttpErrorResponse) => {

      }
    })
      // if (this.registerForm.valid) {
      //   this.isLoading = true;
      //   this._RegisterService.register(this.registerForm.value).subscribe({
      //     next: (response) => {
      //       if (response.message == 'success') {
      //         this.isLoading = false;
      //         console.log("go to login");

      //         // this._Router.navigate(['/login']);
      //       }
      //       console.log(response);
      //     },
      //     error: (err: HttpErrorResponse) => {
      //       this.isLoading = false;
      //       console.log(err);
      //       console.log(err.error.message);
      //       this.errorMsg = err.error.message;
      //     },
      //   });
      // }
    }
  }
