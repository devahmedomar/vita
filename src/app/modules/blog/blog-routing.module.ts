import { BlogComponent } from './components/blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleblogComponent } from './components/singleblog/singleblog.component';

const routes: Routes = [
  {path:"",component:BlogComponent,title:"Blog"},
  {path:":id",component:SingleblogComponent,title:"Blog"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
