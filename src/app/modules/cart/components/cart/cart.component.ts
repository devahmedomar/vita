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
          this.calculateSubtotal();
          this.calculateCartTotal();
        } else {
          console.error('Failed to fetch cart data:', response.message);
        }
      },
      (error) => {
        console.error('Error fetching cart data:', error);
      }
    );
  }
  
  

  calculateSubtotal() {
    this.subtotal = this.cartProducts.reduce((total, item) => {
      return total + item.quantity * item.productPrice;
    }, 0);
  }

  calculateCartTotal() {
    this.cartSubtotal = this.subtotal;
    this.cartTotal = this.cartSubtotal + this.shippingCost;
  }

  updateSubtotal(product: Icart) {
    product.subtotal = product.quantity * product.productPrice;
    this.calculateSubtotal();
    this.calculateCartTotal();
    localStorage.setItem(`product_${product.productId}_quantity`, product.quantity.toString());
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId).subscribe(
      (response) => {
        if (response.success) {
          this.cartProducts = this.cartProducts.filter((product) => product.productId !== productId);
          this.calculateSubtotal();
          this.calculateCartTotal();
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
    this._Router.navigate(['/cart/checkout']);
    // console.log('Checkout');
  }
}
