import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icontact } from 'src/app/models/icontact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl: string = environment.baseUrl;

  constructor(private _HttpClient:HttpClient) {}
  contactUs(data:Icontact):Observable<any>{
    return this._HttpClient.post(`https://email.vitaparapharma.com/api/v1/email-template/VITA_CONTACT_US`,data);
    // console.log(this.apiUrl);
   }
}
