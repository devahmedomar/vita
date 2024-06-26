import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { iProduct } from '../../../../models/iproduct';
import { ProductServiseService } from 'src/app/product-servise.service';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  DataOfProduct:any=[];
  isLoggedIn: boolean = false;
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' = 'success';
  constructor(private loginService: LoginService,public productService:ProductService, private cartService: CartService) { }

  @Input() productCardData:iProduct={
    name:'',
    description:'',
    about:'',
    categoryId:0,
    discount:true,
    inCart:false,
    inWishlist:false,
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
    price: 0,
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
    this.isLoggedIn = this.loginService.isUserLoggedIn();
    if (this.isLoggedIn) {
      this.checkWishlistStatus();
    }
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
    else if (this.origin === 'wishlist') {
      return `/shop/${this.productCardData.productId}`;
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

  onAddToCart(productId: number) {
    if (!this.isLoggedIn) {
      this.showNotification('Please login first.', 'error');
      return;
    }

    this.cartService.updateCart(productId, 1).subscribe(
      (response) => {
        if (response.success) {
          this.showNotification('Product added to cart successfully.', 'success');
        } else {
          this.showNotification('Failed to add product to cart.', 'error');
        }
      },
      (error) => {
        console.error("Error adding product to cart", error);
        this.showNotification('An error occurred while adding the product to the cart.', 'error');
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
    this.productService.getWishlist().subscribe({
      next: (wishlist: any[]) => {
        this.productCardData.inWishlist = wishlist.some(item => item.toString() === this.productCardData.productId.toString());
      }
    });
  }

  toggleWishlist(productId: number): void {
    if (!this.isLoggedIn) {
      this.showNotification('Please login first.', 'error');
      return;
    }

    if (this.productCardData.inWishlist) {
      this.removeFromWishlist(productId);
    } else {
      this.addToWishlist(productId);
    }
  }

  addToWishlist(productId: number): void {
    this.productService.addToWishlist(productId.toString()).subscribe(
      () => {
        this.productCardData.inWishlist = true;
        // this.showNotification('Product added to wishlist.', 'success');
      },
      error => {
        console.error('Error adding to wishlist:', error);
        // this.showNotification('Failed to add product to wishlist.', 'error');
      }
    );
  }

  removeFromWishlist(productId: number): void {
    this.productService.removeFromWishlist(productId.toString()).subscribe(
      () => {
        this.productCardData.inWishlist = false;
        // this.showNotification('Product removed from wishlist.', 'success'); 
      },
      error => {
        console.error('Error removing from wishlist:', error);
        // this.showNotification('Failed to remove product from wishlist.', 'error');
      }
    );
  }

}

