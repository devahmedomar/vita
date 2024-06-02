import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iaccount } from 'src/app/models/iaccount';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 constructor(private _HttpClient: HttpClient) {}
  apiUrl: string = environment.baseUrl + 'v2/auth/register';

  registerNewUser(userData: Iaccount): Observable<any> {
  localStorage.setItem("email",userData.email);
   return this._HttpClient.post(this.apiUrl , userData)
  }

}
