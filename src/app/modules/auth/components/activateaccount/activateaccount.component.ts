import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { ActivateService } from 'src/app/services/auth/verify/activate.service';

@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.css']
})
export class ActivateaccountComponent implements OnInit {
  verificationForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private _ActivateService:ActivateService,
     private _Router: Router,
     private toastr: ToastrService
  ){
    this.verificationForm = this.formBuilder.group({
      verificationCode: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get verificationCode() {
    return this.verificationForm.get('verificationCode');
  }

  verifyAccount(){

    if (this.verificationCode?.valid) {
      this._ActivateService.activate(this.verificationCode.value).subscribe({
        next:()=>{
          this.toastr.success('Account Activated successfully!', 'Success');
          this._Router.navigate(['/auth/login']);
          this.resetForm();
        },
        error:(err:any)=>{
          this.toastr.error(err.error.message,"Error")
          console.log(err.error.message);
          this.resetForm();
        }

      })

    }
    else{
      this.toastr.error("Form is invalid. Please enter a valid verification code.","Error")

    }

  }
  resetForm() {
    this.verificationForm.reset(); // Resets the form to its initial state
  }
  activateBreadCrumbData:Ibreadcrumb={
    prev:"home",
    title:"Activate account"
  };
  email:string|null = localStorage.getItem('email');

  ngOnInit(): void {

  }

}
