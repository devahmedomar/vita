import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiseService {

  constructor( public _HttpClient :HttpClient ) { }
  // GetDataOfProduct(eToken: any): Observable<any>
  // {
  //    return this._HttpClient.get('https://api.vitaparapharma.com/api/v1/user/product/all' , eToken);
  // }
  GetDataOfProduct(requestOptions:any): Observable<any> {
    return this._HttpClient.get<any>('https://api.vitaparapharma.com/api/v4/user/product/all?size=10&page=1', requestOptions);
}
}
