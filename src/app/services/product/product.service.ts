import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Observable, of, Subscription, throwError } from 'rxjs';
import { iProduct } from 'src/app/models/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = '';
  ProductUrl: string = 'https://api.vitaparapharma.com/api/v3/public/product';
  private langChangeSubscription: Subscription = new Subscription();
  constructor(
    private _HttpClient: HttpClient,
    private translate: TranslateService,
    private router: Router,
    private toaster:ToastrService
  ) {
    this.translate.use(localStorage.getItem('lang') || 'en');

    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.refreshPage();
        this.translate.use(localStorage.getItem('lang') || 'en')
      }
    );
  }

  private refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

  getSingleProduct(id: number): Observable<any> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    this.apiUrl = environment.baseUrl + 'v4/public/product/' + id;
    return this._HttpClient.get<any>(this.apiUrl,{headers});
  }

  getCategoryListOfProduct(id: number): Observable<any> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    this.apiUrl = environment.baseUrl + 'v1/public/category/all-lang/' + id;
    return this._HttpClient.get<any>(this.apiUrl,{headers});
  }

  getAllProducts(): Observable<iProduct[]> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    return this._HttpClient.get<iProduct[]>(this.ProductUrl + '/all',{headers});
  }

  getProductsBySubCategory(categoryId: number): Observable<any[]> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    this.apiUrl =
      environment.baseUrl + 'v4/public/product/category/' + categoryId;
    return this._HttpClient.get<any[]>(this.apiUrl,{headers});
  }

  getProductsByMainCategory(mainCategoryId: number): Observable<any[]> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    this.apiUrl =
      environment.baseUrl + 'v4/public/product/main/category/' + mainCategoryId;
    return this._HttpClient.get<any>(this.apiUrl,{headers}).pipe(
      map((response) => {
        if (
          response &&
          response.success &&
          response.data &&
          Array.isArray(response.data.products)
        ) {
          return response.data.products;
        } else {
          throw new Error('Invalid response format or empty response');
        }
      }),
      catchError((error) => {
        console.error('Error fetching products by main category:', error);
        return throwError(
          'Error fetching products by main category: ' + error.message
        );
      })
    );
  }
  private handleAuthError() {
    this.toaster.error("You Need To Login First")
    // Redirect to login page
    this.router.navigate(['/']);
    // Return an observable that completes immediately
    return of(null);
  }
  getWishlist(): Observable<string[]|any> {
    const language = this.translate.currentLang;
    const authToken = localStorage.getItem('eToken');
    // if (!authToken) {
    //   return this.handleAuthError();
    // }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      'Accept-Language':language
    });

    const url = `${environment.baseUrl}v1/user/wishlist/my`;
    return this._HttpClient.get<any>(url, { headers }).pipe(
      map((response: any) => {
        if (
          response &&
          response.data &&
          response.data.wishlist &&
          response.data.wishlist.wishlistItems
        ) {
          return response.data.wishlist.wishlistItems.map(
            (item: any) => item.productId
          );
        } else {
          throw new Error('Invalid response format');
        }
      }),
      catchError((error) => {
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
      Authorization: `Bearer ${authToken}`,
    });

    const url = `${environment.baseUrl}v1/user/wishlist/add/${productId}`;
    return this._HttpClient.put(url, null, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
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
      Authorization: `Bearer ${authToken}`,
    });

    const url = `${environment.baseUrl}/v1/user/wishlist/remove/${productId}`;
    return this._HttpClient.delete(url, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        console.error('Error removing from wishlist:', error);
        return throwError('Error removing from wishlist: ' + error.message);
      })
    );
  }

  searchProducts(query: string): Observable<iProduct[]> {
    return this._HttpClient.get<any>(`${this.ProductUrl}/all`).pipe(
      map((response: any) => {
        // console.log('Products API response:', response);
        if (
          !response.success ||
          !response.data ||
          !Array.isArray(response.data.products)
        ) {
          throw new Error('Invalid response format');
        }
        return response.data.products.filter(
          (product: iProduct) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
      }),
      catchError((error) => {
        console.error('Error searching products:', error);
        return of([]);
      })
    );
  }
}
