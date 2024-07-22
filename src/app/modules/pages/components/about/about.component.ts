import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private translate:TranslateService){

  }
  aboutbreadcrumbData:Ibreadcrumb={
    prev:"home",
    title:"ABOUT"
  }
}
