import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    PlaceorderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule

  ]
})
export class CartModule { }
