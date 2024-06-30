import { Component, Input, OnInit } from '@angular/core';
import { iProduct } from '../../../../models/iproduct';
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
    this.loginService.isLoggedIn$().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  
    if (this.isLoggedIn) {
      this.checkWishlistStatus();
    }
    if (this.isLoggedIn) {
      this.checkCartStatus();
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

  checkCartStatus() {
    this.cartService.getCart().subscribe(
      (response: any) => {
        if (response.success && response.data && response.data.cart && response.data.cart.cartItems) {
          const cartItems: any[] = response.data.cart.cartItems;
          this.productCardData.inCart = cartItems.some(item => item.productId === this.productCardData.productId);
          localStorage.setItem(`product_${this.productCardData.productId}_inCart`, this.productCardData.inCart ? 'true' : 'false');
        }
      },
      error => {
        console.error('Error checking cart status:', error);
      }
    );
  }


  toggleCartAction() {
    if (this.productCardData.inCart) {
      this.removeFromCart(this.productCardData.productId);
    } else {
      this.onAddToCart(this.productCardData.productId);
    }
  }

  onAddToCart(productId: number) {
    if (!this.isLoggedIn) {
      this.showNotification('Please login first.', 'error');
      return;
    }

    this.cartService.updateCart(productId, 1).subscribe(
      (response) => {
        if (response.success) {
          this.productCardData.inCart = true;
          localStorage.setItem(`product_${productId}_inCart`, 'true');
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

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId).subscribe(
      (response: any) => {
        if (response.success) {
          this.productCardData.inCart = false;
          localStorage.setItem(`product_${productId}_inCart`, 'false');
        } else {
          console.error('Failed to remove product from cart:', response.error);
        }
      },
      error => {
        console.error('Error removing product from cart:', error);
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
  
  fetchProductRating() {
    this.productService.getSingleProduct(this.productCardData.productId).subscribe(
      (product: any) => {
        this.productCardData.reviews = product.rating; 
      },
      error => {
        console.error('Error fetching product rating:', error);
      }
    );
  }

  getStars(rating: number): number[] {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;
    const stars: number[] = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(1);
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(0); 
    }

    return stars;
  }
}

