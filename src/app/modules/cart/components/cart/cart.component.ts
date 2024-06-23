import { Router } from '@angular/router';
import { Ibreadcrumb } from './../../../../models/ibreadcrumb';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Icart } from 'src/app/models/icart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private _Router: Router, private cartService: CartService) {}
  cartBreadCrumbData: Ibreadcrumb = {
    title: 'cart',
    prev: 'home',
  };

  cartProducts: Icart[] = [];
  subtotal: number = 0;
  cartSubtotal: number = 0;
  shippingCost: number = 30;
  cartTotal: number = 0;
  showCheckoutError: boolean = false;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(
      (response) => {
        if (response.success) {
          this.cartProducts = response.data.cart.cartItems;
          this.cartProducts.forEach((product) => {
            const storedQuantity = localStorage.getItem(`product_${product.productId}_quantity`);
            if (storedQuantity) {
              product.quantity = parseInt(storedQuantity, 10);
            }
            product.subtotal = product.quantity * product.productPrice;
          });
          this.calculateCartValues();
        } else {
          console.error('Failed to fetch cart data:', response.message);
        }
      },
      (error) => {
        console.error('Error fetching cart data:', error);
      }
    );
  }
  
  calculateCartValues() {
    this.cartSubtotal = this.cartService.calculateSubtotal(this.cartProducts);
    this.cartTotal = this.cartService.calculateCartTotal(this.cartSubtotal, this.shippingCost);
  }

  updateSubtotal(product: Icart) {
    product.subtotal = product.quantity * product.productPrice;
    this.calculateCartValues();
    this.cartService.updateCart(product.productId, product.quantity).subscribe(
      (response) => {
        if (!response.success) {
          console.error('Failed to update product quantity in cart:', response.message);
        }
      },
      (error) => {
        console.error('Error updating product quantity in cart:', error);
      }
    );
  }


  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId).subscribe(
      (response) => {
        if (response.success) {
          this.cartProducts = this.cartProducts.filter((product) => product.productId !== productId);
          this.calculateCartValues();
        } else {
          console.error('Failed to remove product from cart:', response.message);
        }
      },
      (error) => {
        console.error('Error removing product from cart:', error);
      }
    );
  }

  checkout(): void {
    if (this.cartProducts.length === 0) {
      this.showCheckoutError = true; 
      setTimeout(() => {
        this.showCheckoutError = false;
      }, 3000);
    } else {
      this._Router.navigate(['/cart/checkout']); 
    }
  }

  closeNotification(): void {
    this.showCheckoutError = false; 
  }
}
