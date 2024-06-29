import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { INotification } from 'src/app/models/inotification';
import { LoginService } from '../auth/login/login.service'; 

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://api.vitaparapharma.com/api/v3/profile/notifications';

  constructor(private http: HttpClient, private authService: LoginService) {}

  getNotifications(): Observable<INotification[]> {
    const token = this.authService.getAuthToken();
    

    if (!token) {
      return new Observable<INotification[]>(observer => observer.next([]));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<{ data: { notifications: INotification[] } }>(this.apiUrl, { headers }).pipe(
      map(response => response.data.notifications),
      catchError(error => {
        return new Observable<INotification[]>(observer => observer.next([]));
      })
    );
  }
}
