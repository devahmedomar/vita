import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IOrder, IOrderItem } from 'src/app/models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://api.vitaparapharma.com/api/v2/user/order/';
  constructor(private http: HttpClient) { }

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

  getAllOrders(): Observable<any> {
    const authToken = localStorage.getItem('eToken'); 
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`
    });

    return this.http.get<any>(this.apiUrl + 'all', { headers }).pipe(
      catchError((error) => {
        throw 'Error fetching orders: ' + error;
      })
    );
  }

  getOrderById(token: string, orderId: number): Observable<IOrder> {
    const url = `${this.apiUrl}/${orderId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<IOrder>(url, { headers });
  }
  
}
