import { Component, Input, OnInit } from '@angular/core';
import { Iproductcard } from 'src/app/models/iproductcard';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input() productCardData:Iproductcard={
    haveSale:false,
    imgURL:"",
    productDescription:"",
    productName:"",
    productPrice:0,
    productRate:0,
    sale:0
  }
  constructor() { }

  ngOnInit() {
  }

}
