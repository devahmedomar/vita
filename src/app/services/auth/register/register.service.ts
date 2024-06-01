import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 constructor(private _HttpClient: HttpClient) {}
  apiUrl: string = environment.baseUrl + 'v2/auth/register';

  register(userData: any): Observable<any> {
    console.log(userData);
    
   return this._HttpClient.post(this.apiUrl , userData)
  }
  
}
