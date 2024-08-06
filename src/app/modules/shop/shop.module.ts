import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './components/shop/shop.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    ShopComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    RatingModule,
    FormsModule,
    InputNumberModule,
    TabViewModule,
    ButtonModule,
    NgxSpinnerModule,
    PaginatorModule
  ]
})
export class ShopModule { }
