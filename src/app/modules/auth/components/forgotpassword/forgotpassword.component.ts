import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private _Router:Router){}
  forgotPasswordBreadCrumbData:Ibreadcrumb={
    prev:"home",
    title:"my account"
  }
  forgotPassword(){
    this._Router.navigate(['/auth/check-email'])

  }

}
