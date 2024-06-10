import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { SingleblogComponent } from './components/singleblog/singleblog.component';
import { SharedModule } from '../shared/shared.module';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogComponent,
    SingleblogComponent, 
    SearchPipe,
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    BlogRoutingModule,
    SharedModule,
  ]
})
export class BlogModule { }
