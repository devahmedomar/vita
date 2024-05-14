import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { SingleblogComponent } from './components/singleblog/singleblog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BlogComponent,
    SingleblogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
