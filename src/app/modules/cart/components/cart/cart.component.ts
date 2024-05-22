import { Router } from '@angular/router';
import { Ibreadcrumb } from './../../../../models/ibreadcrumb';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _Router:Router){}


  cartBreadCrumbData: Ibreadcrumb = {
    title: "cart",
    prev: "home"
  }
  prodNumber:number=1;
  products = [
    { id: 1, name: 'Product 1', subtotal: 100,quantity:1 },
    { id: 2, name: 'Product 2', subtotal: 200,quantity:2 },
    { id: 3, name: 'Product 3', subtotal: 300,quantity:3 },

  ];


  checkout(){
this._Router.navigate(['/cart/checkout'])
  }

}
