import { Component } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogBreadCrumbData: Ibreadcrumb = {
    title: "blog",
    prev: "home"
  }

}
