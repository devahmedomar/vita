import { Component, Input, OnInit } from '@angular/core';
import { iProduct } from '../../../../models/iproduct';

import { ProductServiseService } from 'src/app/product-servise.service';

import { LoginService } from 'src/app/services/auth/login/login.service';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {


  DataOfProduct:any=[];
  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService,public _ProductServiseService:ProductServiseService) { }

  @Input() productCardData:iProduct={
    name:'',
    description:'',
    about:'',
    categoryId:0,
    discount:true,
    inCart:false,
    inWishlist:true,
    mainCategoryId:0,
    pictures:[],
    priceBeforeDiscount:0,
    priceAfterDiscount:0,
    productId : 1,
    rating:0,
    reviews:0,
    stockQuantity:0,
    tags:[],
    weight:0,
    price: 0

  }
  @Input() CardData=
  {
    id:0,
    haveSale: false,
    imgURL: "",
    productName: "",
    productDescription: "",
    productPrice: 0,
    productRate: 0,
    sale: 0
  }
  @Input() origin: string="";



  ngOnInit() {
    // console.log(this.CardData)
    // console.log(localStorage.getItem('eToken'))
    this.isLoggedIn = this.loginService.isUserLoggedIn();
    // console.log('Is user logged in?', this.isLoggedIn);

  }
  getRouterLink(): string {
    if (this.origin === 'home') {
      return `shop/${this.productCardData.productId}`;
    } else if (this.origin === 'shop') {
      return `${this.productCardData.productId}`;
    }
    else if (this.origin === 'single-product') {
      return `../${this.productCardData.productId}`;
    }
    else {
      return `shop`;
    }
  }

  DisplaySalePos(): boolean {
    if (this.origin !== 'shop' && this.productCardData.discount) {
      const discountPercentage = (((this.productCardData.priceBeforeDiscount - this.productCardData.priceAfterDiscount ) / this.productCardData.priceBeforeDiscount) * 100);
      if (!isNaN(discountPercentage)) {
        return true;
      }
    }
    return false;
  }
}
