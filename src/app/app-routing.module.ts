import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"auth",
    loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"blog",
    loadChildren:()=>import("./modules/blog/blog.module").then(m=>m.BlogModule)
  },
  {
    path:"shop",
    loadChildren:()=>import("./modules/shop/shop.module").then(m=>m.ShopModule)
  },
  {
    path:"cart",
    loadChildren:()=>import("./modules/cart/cart.module").then(m=>m.CartModule)
  },
  {
    path:"",
    loadChildren:()=>import("./modules/pages/pages.module").then(m=>m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
