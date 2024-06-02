import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {

  constructor(private _HttpClient:HttpClient) { }
  apiUrl: string = 'https://api.vitaparapharma.com/p/activate-account';

  activate(verificationCode:string): Observable<any> {
  let email = localStorage.getItem("email");
   return this._HttpClient.post(this.apiUrl , {email,code:verificationCode})
  }
}
