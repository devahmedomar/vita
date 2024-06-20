import { Iproductcard } from './../../../../models/iproductcard';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icategory } from 'src/app/models/icategory';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' = 'success';
  isLoggedIn: boolean = false;
  rate:number=4;
  prodNumber:number=1;
  activeIndex:number=0;
  productId:string="";
  categoryId:number=0;
  singleProduct:any;
  safeProductDescription: SafeHtml = '';
  category:Icategory|undefined;

  constructor(private route:ActivatedRoute,private _ProductService:ProductService, private sanitizer: DomSanitizer, private loginService: LoginService, private cartService: CartService) { }
  relatedProducts:Iproductcard[]=[]

  getSingleProduct(){
    this._ProductService.getSingleProduct(+this.productId).subscribe({
      next:(res)=>{
        this.singleProduct = res.data.product;

        this.categoryId = this.singleProduct.categoryId;
        this.getCategoriesById();
        this.safeProductDescription = this.sanitizer.bypassSecurityTrustHtml(this.singleProduct.description);

      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
  getCategoriesById(){
    this._ProductService.getCategoryListOfProduct(this.categoryId).subscribe({
      next:(res:any)=>{
        this.category = res.data.category;
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isUserLoggedIn();
    this.route.paramMap.subscribe(params=>{
      this.productId=params.get('id')!;
    })

    this.getSingleProduct()


  }
  onAddToCart(productId: number) {
    if (!this.isLoggedIn) {
      this.showNotification('Please login first.', 'error');
      return;
    }

    this.cartService.updateCart(productId, this.prodNumber).subscribe(
      (response) => {
        this.showNotification('Item added to cart', 'success');
      },
      (error) => {
        console.error('Failed to add item to cart:', error);
        this.showNotification('Failed to add item to cart', 'error');
      }
    );
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.notificationMessage = message;
    this.notificationType = type;

    setTimeout(() => {
      this.clearNotification();
    }, 3000);
  }

  clearNotification() {
    this.notificationMessage = null;
  }
}
