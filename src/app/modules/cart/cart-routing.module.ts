import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {path:"",component:CartComponent,title:"Shopping Cart", canActivate: [authGuard]},
  {path:"checkout",component:CheckoutComponent,title:"Checkout", canActivate: [authGuard]},
  {path:"placeorder",component:PlaceorderComponent,title:"place order", canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {

}
