import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {
  baseURL:string = "https://api.vitaparapharma.com/p/forget-password";
  constructor(private _HttpClient:HttpClient) { }
  forgetPass(email:string):Observable<any>{
    return this._HttpClient.post(this.baseURL,{email});
  }
}
