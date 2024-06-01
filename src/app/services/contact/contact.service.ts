import { Icontact } from './../../models/icontact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl: string = environment.baseUrl;

  constructor(private _HttpClient:HttpClient) {}
   contactus(data:Icontact){
    this._HttpClient.post(`${this.apiUrl}v1/email-template/VITA_CONTACT_US`,data);
    // console.log(this.apiUrl);
   }
}
