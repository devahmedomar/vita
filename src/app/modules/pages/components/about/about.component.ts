import { Component } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutbreadcrumbData:Ibreadcrumb={
    prev:"home",
    title:"about us"
  }
}
