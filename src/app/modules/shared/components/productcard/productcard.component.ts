import { Component, Input, OnInit } from '@angular/core';
import { Iproductcard } from 'src/app/models/iproductcard';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input() productCardData:Iproductcard={
    id:0,
    haveSale:false,
    imgURL:"",
    productDescription:"",
    productName:"",
    productPrice:0,
    productRate:0,
    sale:0
  }
  @Input() origin: string="";
  constructor() { }

  ngOnInit() {
  }

  getRouterLink(): string {
    if (this.origin === 'home') {
      return `shop/${this.productCardData.id}`;
    } else if (this.origin === 'shop') {
      return `${this.productCardData.id}`;
    }
    else if (this.origin === 'single-product') {
      return `../${this.productCardData.id}`;
    }
    else {
      return `shop`; // default route
    }
  }

}
