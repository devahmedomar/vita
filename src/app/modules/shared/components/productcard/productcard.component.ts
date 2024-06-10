import { Component, Input, OnInit } from '@angular/core';
import { iProduct } from '../../../../models/iproduct';
import { LoginService } from 'src/app/services/auth/login/login.service';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService) { }
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
    weight:0

  }
  @Input() origin: string="";
 
  ngOnInit() {
    this.isLoggedIn = this.loginService.isUserLoggedIn();
    console.log('Is user logged in?', this.isLoggedIn);
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

}
