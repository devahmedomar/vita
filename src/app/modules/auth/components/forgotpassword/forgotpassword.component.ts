import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { ForgetpassService } from 'src/app/services/auth/forget/forgetpass.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private _Router:Router,private _ForgetpassService:ForgetpassService,private formBuilder: FormBuilder,private toastr:ToastrService){}
  forgotPasswordBreadCrumbData:Ibreadcrumb={
    prev:"home",
    title:"ACCOUNT"
  };
  forgotPasswordForm: FormGroup=new FormGroup({});
  buildForgetPasswordForm(){
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  forgotPassword(){
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      // Handle forgot password logic here
      console.log('Reset password for:', email);
      this._ForgetpassService.forgetPass(email).subscribe({
        next:(res)=>{
          this._Router.navigate(['/auth/check-email'])
        },
        error:(err)=>{
          console.log(err);
          this.toastr.error(err.error.message)

        }
      });
    } else {
      console.log('Form is invalid');
    }



  }
  ngOnInit(): void {
    this.buildForgetPasswordForm();
  }

}
