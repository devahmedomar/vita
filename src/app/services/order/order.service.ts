import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable ,of, Subscription} from 'rxjs';
import { IOrder, IOrderItem } from 'src/app/models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private langChangeSubscription: Subscription = new Subscription();
  private apiUrl = 'https://api.vitaparapharma.com/api/v2/user/order/';
  constructor(private http: HttpClient,private router:Router,private toaster:ToastrService,private translate: TranslateService) {

    this.translate.use(localStorage.getItem('lang') || 'en');
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
  checkOrder(token: string, orderItems: IOrderItem[], coupon: string): Observable<IOrder> {
    const url = `${this.apiUrl + 'check/order'}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const body = { orderItems, coupon };
    console.log(body);

    return this.http.post<IOrder>(url, body, { headers });
  }

  addOrder(token: string, addressId: string, orderItems: IOrderItem[], coupon: string): Observable<IOrder> {
    const url = `${this.apiUrl + 'new'}/on/${addressId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const body = { orderItems, coupon };
    console.log(body);

    return this.http.post<IOrder>(url, body, { headers });
  }
  private handleAuthError() {
    this.toaster.error("You Need To Login First")
    // Redirect to login page
    this.router.navigate(['/']);
    // Return an observable that completes immediately
    return of(null);
  }
  getAllOrders(): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
    });
    // if (!authToken) {
    //   return this.handleAuthError();
    // }
    return this.http.get<any>(this.apiUrl + 'all', { headers }).pipe(
      catchError((error) => {
        throw 'Error fetching orders: ' + error;
      })
    );
  }

  getOrderById( orderId: number): Observable<IOrder> {
    const url = `${this.apiUrl}/${orderId}`;
    const authToken = localStorage.getItem('eToken');
    const language = this.translate.currentLang;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    }).set('Accept-Language', language);
    return this.http.get<IOrder>(url, { headers });
  }

}
