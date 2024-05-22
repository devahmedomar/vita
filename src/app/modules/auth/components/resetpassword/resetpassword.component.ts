import { Component } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  resetBreadCrumbData:Ibreadcrumb={
    prev:"home",
    title:"my account"
  }
}
