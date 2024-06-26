import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { iProduct } from 'src/app/models/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "";
  ProductUrl: string = "https://api.vitaparapharma.com/api/v3/public/product";

  constructor(private _HttpClient: HttpClient) { }

  getSingleProduct(id:number): Observable<any> {
    this.apiUrl = environment.baseUrl + 'v4/public/product/'+id;
    return this._HttpClient.get<any>(this.apiUrl)
  }
  getCategoryListOfProduct(id:number):Observable<any>{
    this.apiUrl = environment.baseUrl + 'v1/public/category/all-lang/'+id;
    return this._HttpClient.get<any>(this.apiUrl)
  }
  getAllProducts(): Observable<iProduct[]> {
    return this._HttpClient.get<iProduct[]>(this.ProductUrl + '/all');
  }

  getProductsByCategory(categoryId: number): Observable<any[]> {
    return this._HttpClient.get<any[]>(`${this.ProductUrl + '/category/'}${categoryId}`);
  }

  getWishlist(): Observable<string[]> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      return throwError('User not authenticated');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
    });

    const url = `${environment.baseUrl}v1/user/wishlist/my`;
    return this._HttpClient.get<any>(url, { headers }).pipe(
      map((response: any) => {
        if (response && response.data && response.data.wishlist && response.data.wishlist.wishlistItems) {
          return response.data.wishlist.wishlistItems.map((item: any) => item.productId);
        } else {
          throw new Error('Invalid response format');
        }
      }),
      catchError(error => {
        console.error('Error fetching wishlist:', error);
        return throwError('Error fetching wishlist: ' + error.message);
      })
    );
  }

  addToWishlist(productId: string): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      return throwError('User not authenticated');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
    });
  
    const url = `${environment.baseUrl}v1/user/wishlist/add/${productId}`;
    return this._HttpClient.put(url, null, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(error => {
        console.error('Error adding to wishlist:', error);
        return throwError('Error adding to wishlist: ' + error.message);
      })
    );
  }

  removeFromWishlist(productId: string): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      return throwError('User not authenticated');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
    });
  
    const url = `${environment.baseUrl}/v1/user/wishlist/remove/${productId}`;
    return this._HttpClient.delete(url, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(error => {
        console.error('Error removing from wishlist:', error);
        return throwError('Error removing from wishlist: ' + error.message);
      })
    );
  }
}