import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Icart } from 'src/app/models/icart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://api.vitaparapharma.com/api/v1/';
  private cartCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartCount$: Observable<number> = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient) { this.loadCartCount(); }

  private loadCartCount() {
    this.getCart().subscribe(
      (response: any) => {
        if (response && response.data && response.data.cart && response.data.cart.cartItems) {
          this.updateCartCount(response.data.cart.cartItems.length);
        }
      },
      error => {
        console.error('Error loading cart count:', error);
      }
    );
  }

  private updateCartCount(count: number): void {
    this.cartCountSubject.next(count);
  }

  getCart(): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      throw new Error('Authentication token not found.');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.get(`${this.apiUrl}user/cart/my`, { headers }).pipe(
      map((response: any) => {
        if (response.success && response.data && response.data.cart && response.data.cart.cartItems) {
          this.updateCartCount(response.data.cart.cartItems.length);
        }
        return response;
      }),
      catchError(error => {
        console.error('Error fetching cart:', error);
        throw new Error('Error fetching cart: ' + (error.message || 'Unknown error'));
      })
    );
  }

  updateCart(productId: number, quantity: number): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      throw new Error('Authentication token not found.');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.put(
      `${this.apiUrl}user/cart/update`,
      { productId, quantity },
      { headers }
    ).pipe(
      map((response: any) => {
        if (response.success) {
          this.loadCartCount(); 
          localStorage.setItem(`product_${productId}_quantity`, quantity.toString());
        }
        return response;
      }),
      catchError(error => {
        console.error('Error updating cart:', error);
        throw new Error('Error updating cart: ' + error.message);
      })
    );
  }

  removeFromCart(productId: number): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      throw new Error('Authentication token not found.');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.delete(`${this.apiUrl}user/cart/remove/${productId}`, { headers })
      .pipe(
        map((response: any) => {
          if (response.success) {
            this.loadCartCount();
          }
          return response;
        }),
        catchError(error => {
          console.error('Error removing from cart:', error);
          throw new Error('Error removing from cart: ' + error.message);
        })
      );
  }

  calculateSubtotal(cartItems: Icart[]): number {
    return cartItems.reduce((total, item) => {
      return total + (item.subtotal || 0);
    }, 0);
  }
  
  calculateCartTotal(subtotal: number, shippingCost: number): number {
    return subtotal + shippingCost;
  }
}
