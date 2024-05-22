import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';

const routes: Routes = [
  {path:"",component:CartComponent,title:"Shopping Cart"},
  {path:"checkout",component:CheckoutComponent,title:"Checkout"},
  {path:"placeorder",component:PlaceorderComponent,title:"place order"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {

}
