import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { INotification } from 'src/app/models/inotification';
import { LoginService } from '../auth/login/login.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://api.vitaparapharma.com/api/v3/profile/notifications';
  private langChangeSubscription: Subscription = new Subscription();

  constructor(private http: HttpClient, private authService: LoginService,private translate: TranslateService,
    private router: Router) {
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
  getNotifications(): Observable<INotification[]> {
    const token = this.authService.getAuthToken();
    const language = this.translate.currentLang;

    if (!token) {
      return new Observable<INotification[]>(observer => observer.next([]));
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Accept-Language', language);


    return this.http.get<{ data: { notifications: INotification[] } }>(this.apiUrl, { headers }).pipe(
      map(response => response.data.notifications),
      catchError(error => {
        return new Observable<INotification[]>(observer => observer.next([]));
      })
    );
  }
  // New method to mark a notification as read
  markAsRead(notificationId: number): Observable<void> {
    const token = this.authService.getAuthToken();
    if (!token) {
      return new Observable<void>(observer => observer.next());
    }
    const language = this.translate.currentLang;

    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`)
    .set('Accept-Language', language);
    const url = `https://api.vitaparapharma.com/api/v3/profile/read-notification/${notificationId}`;

    return this.http.put<void>(url, {}, { headers }).pipe(
      catchError(error => {
        console.error('Error marking notification as read', error);
        return new Observable<void>(observer => observer.next());
      })
    );
  }
getUnreadNotifications():Observable<any>{
  const token = this.authService.getAuthToken();
  if (!token) {
    return new Observable<void>(observer => observer.next());
  }
  const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
  return this.http.get(`https://api.vitaparapharma.com/api/v3/profile/notifications/unread`, { headers })
}
}
