import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ICountry, IAddress, IShippingAddress } from 'src/app/models/iaddress';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'https://api.vitaparapharma.com/api/v2/';
  private apiUrl2 = 'https://api.vitaparapharma.com/api/v2/user/address/all';

  constructor(private http: HttpClient) {}

  getRegions(): Observable<ICountry[]> {
    return this.http.get(`${this.apiUrl}public/country-city-region`).pipe(
      map((response: any) => {
        if (response.success) {
          return response.data as ICountry[];
        }
        throw new Error(response.message || 'Failed to fetch regions.');
      }),
      catchError(error => {
        console.error('Error fetching regions:', error);
        return throwError('Error fetching regions: ' + (error.message || 'Unknown error'));
      })
    );
  }

  addAddress(address: IAddress): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      throw new Error('Authentication token not found.');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.post(`${this.apiUrl}user/address/new`, address, { headers }).pipe(
      catchError(error => {
        console.error('Error adding address:', error);
        throw new Error('Error adding address: ' + error.message);
      })
    );
  }

  getAddresses(token: string): Observable<IShippingAddress[]> {
    if (!token) {
      return throwError('Authentication token not provided.');
    }
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any>(this.apiUrl2, { headers }).pipe(
      map((response: any) => {
        if (response && response.data && response.data.addresses) {
          return response.data.addresses as IShippingAddress[];
        } else {
          throw new Error('Failed to fetch addresses.');
        }
      }),
      catchError(error => {
        console.error('Error fetching addresses:', error);
        return throwError('Error fetching addresses: ' + (error.message || 'Unknown error'));
      })
    );
  }
}
