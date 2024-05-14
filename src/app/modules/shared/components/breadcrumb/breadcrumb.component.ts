import { Component, Input, OnInit } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() breadcrumbData: Ibreadcrumb = {
    title: "",
    prev: ""
  };



}
