import { Iproductcard } from './../../../../models/iproductcard';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icategory } from 'src/app/models/icategory';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  isInWishlist: boolean = false;

  constructor(private route:ActivatedRoute,private _ProductService:ProductService, private sanitizer: DomSanitizer, private loginService: LoginService, private cartService: CartService,  private spinner: NgxSpinnerService) { }
  relatedProducts:Iproductcard[]=[]

  getSingleProduct(){
    this.spinner.show();
    this._ProductService.getSingleProduct(+this.productId).subscribe({
      next:(res)=>{
        this.singleProduct = res.data.product;
        this.categoryId = this.singleProduct.categoryId;
        this.getCategoriesById();
        this.safeProductDescription = this.sanitizer.bypassSecurityTrustHtml(this.singleProduct.description);
        this.spinner.hide();
      },
      
      error:(err:any)=>{
        console.log(err);
        this.spinner.hide();
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
    this.loginService.isLoggedIn$().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  
    this.route.paramMap.subscribe(params=>{
      this.productId=params.get('id')!;
      if (this.isLoggedIn) {
        this.checkWishlistStatus();
      }
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

  checkWishlistStatus() {
    // console.log('Checking wishlist status for productId:', this.productId);
  
    this._ProductService.getWishlist().subscribe({
      next: (wishlist: any[]) => {
        // console.log('Wishlist:', wishlist);
        this.isInWishlist = wishlist.some(item => item.toString() === this.productId.toString());
        // console.log('isInWishlist:', this.isInWishlist);
      },
      error: (err) => {
        // console.error('Error fetching wishlist:', err);
      }
    });
  }
  
  addToWishlist(productId: string) {
    this._ProductService.addToWishlist(productId).subscribe({
      next: (res) => {
        // console.log('Product added to wishlist:', res);
        this.isInWishlist = true; 
      },
      error: (err) => {
        // console.error('Error adding to wishlist:', err);
      }
    });
  }
  
  removeFromWishlist(productId: string) {
    this._ProductService.removeFromWishlist(productId).subscribe({
      next: (res) => {
        // console.log('Product removed from wishlist:', res);
        this.isInWishlist = false;
      },
      error: (err) => {
        // console.error('Error removing from wishlist:', err);
      }
    });
  }
  
  toggleWishlist(productId: string) {
    if (this.isInWishlist) {
      this.removeFromWishlist(productId);
    } else {
      this.addToWishlist(productId);
    }
  }  
}
