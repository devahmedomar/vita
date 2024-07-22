import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://api.vitaparapharma.com/api/v3/profile/update';
  private getProfileUrl = 'https://api.vitaparapharma.com/api/v3/profile';
  private updateProfileImageUrl = 'https://api.vitaparapharma.com/api/v3/profile/image';
  private deleteProfileImageUrl = 'https://api.vitaparapharma.com/api/v3/profile/image';

  constructor(private http: HttpClient,private toaster:ToastrService,private router:Router) { }
  private handleAuthError() {
    this.toaster.error("You Need To Login First")
    // Redirect to login page
    this.router.navigate(['/']);
    // Return an observable that completes immediately
    return of(null);
  }
  updateProfile(profileData: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    male?: boolean;
    dateOfBirth?: string;
  }): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      return throwError('User not authenticated');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.put(this.apiUrl, profileData, { headers });
  }

  getProfile(): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    // if (!authToken) {
    //   return this.handleAuthError();
    // }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get(this.getProfileUrl, { headers });
  }

  updateProfileImage(file: File): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      return throwError('User not authenticated');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const formData: FormData = new FormData();
    formData.append('image', file, file.name);

    return this.http.put(this.updateProfileImageUrl, formData, { headers });
  }
  deleteProfileImage(): Observable<any> {
    const authToken = localStorage.getItem('eToken');
    if (!authToken) {
      return throwError('User not authenticated');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('eToken')}`
    });
    console.log(headers);

    return this.http.delete<any>(this.deleteProfileImageUrl, { headers });
  }
}
