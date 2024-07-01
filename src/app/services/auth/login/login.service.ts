import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IloginForm } from 'src/app/models/ilogin-form';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authTokenSubject = new BehaviorSubject<string | null>(this.getAuthToken());
  private apiUrl: string = environment.baseUrl + 'v2/auth/login';

  constructor(private _HttpClient: HttpClient) { }

  setAuthToken(token: string): void {
    localStorage.setItem('eToken', token);
    this.authTokenSubject.next(token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('eToken');
  }

  clearAuthToken(): void {
    localStorage.removeItem('eToken');
    this.authTokenSubject.next(null);
  }

  isLoggedIn$(): Observable<boolean> {
    return this.authTokenSubject.asObservable().pipe(
      map(token => !!token)
    );
  }

  login(userData: IloginForm): Observable<any> {
    return this._HttpClient.post(this.apiUrl, userData)
      .pipe(
        map((response: any) => {
          if (response && response.success && response.data && response.data.token) {
            this.setAuthToken(response.data.token);
            return true;
          }
          return false;
        })
      );
  }

  logout(): void {
    this.clearAuthToken();
  }

  getUserDecodedData() {
    const encodedToken = this.getAuthToken();
    if (encodedToken) {
      const decodedToken = this.jwtDecodeToken(encodedToken);
      console.log(decodedToken);
      return decodedToken;
    }
    return null;
  }

  private jwtDecodeToken(encodedToken: string) {
    try {
      return jwtDecode(encodedToken);
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  }


  getCurrentUserEmail(): string {
  const token = this.getAuthToken();
  if (!token) {
    console.error('No token available');
    return '';
  }

  const payload = this.decodeToken(token);
  return payload?.sub || ''; 
}

  private decodeToken(token: string): any {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

}
