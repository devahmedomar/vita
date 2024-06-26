import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './../../../../services/auth/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';
import { iProduct } from 'src/app/models/iproduct';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  @Input() wishlistBreadCrumbData: Ibreadcrumb = {
    title: 'wishlist',
    prev: 'home'
  };
  @Input() origin: string = '';
  @Input() wishlistProducts: iProduct[] = [];
  @Input() isLoggedIn: boolean = false;
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' = 'success';

  constructor(private productService: ProductService, private loginService: LoginService, private cartService: CartService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isUserLoggedIn();
    this.loadWishlist();
  }

  calculateFloor(value: number): number {
    return Math.floor(value);
  }

  loadWishlist(): void {
    this.wishlistProducts = [];

    this.productService.getWishlist().subscribe({
      next: (productIds: string[]) => {
        const uniqueProductIds = new Set<string>(productIds);
        uniqueProductIds.forEach(id => {
          this.productService.getSingleProduct(+id).subscribe({
            next: (response) => {
              const product = response.data.product;
              if (!this.isProductInWishlist(product.productId)) {
                product.inWishlist = true;
                this.wishlistProducts.push(product);
              }
            },
            error: (error) => console.error('Error loading product:', error)
          });
        });
      },
      error: (error) => console.error('Error loading wishlist:', error)
    });
  }

  private isProductInWishlist(productId: number): boolean {
    return this.wishlistProducts.some(product => product.productId === productId);
  }

  getRouterLink(product: iProduct): string {
    return `/shop/${product.productId}`;
  }

  DisplaySalePos(product: iProduct): boolean {
    if (this.origin !== 'shop' && product.discount) {
      const discountPercentage = (((product.priceBeforeDiscount - product.priceAfterDiscount) / product.priceBeforeDiscount) * 100);
      return !isNaN(discountPercentage);
    }
    return false;
  }

  onAddToCart(productId: number) {
    if (!this.isLoggedIn) {
      console.log('User is not logged in.'); 
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
  

  toggleWishlist(productId: number): void {
    if (!this.isLoggedIn) {
      return;
    }

    const product = this.wishlistProducts.find(p => p.productId === productId);
    if (product) {
      if (product.inWishlist) {
        this.removeFromWishlist(productId);
      } else {
        this.addToWishlist(productId);
      }
    }
  }

  addToWishlist(productId: number): void {
    this.productService.addToWishlist(productId.toString()).subscribe(
      () => {
        const product = this.wishlistProducts.find(p => p.productId === productId);
        if (product) {
          product.inWishlist = true;
        }
      },
      error => {
        console.error('Error adding to wishlist:', error);
      }
    );
  }

  removeFromWishlist(productId: number): void {
    this.productService.removeFromWishlist(productId.toString()).subscribe(
      () => {
        const index = this.wishlistProducts.findIndex(p => p.productId === productId);
        if (index !== -1) {
          this.wishlistProducts.splice(index, 1);
        }
      },
      error => {
        // console.error('Error removing from wishlist:', error);
      }
    );
  }
}
