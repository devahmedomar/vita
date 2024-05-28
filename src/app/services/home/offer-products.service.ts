import { iOfferProductsObj } from '../../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfferProductsService {

  apiUrl: string = environment.baseUrl + 'v4/public/product/offer/all?size=6&page=1';

  constructor(private _HttpClient: HttpClient) { }

  getOfferProducts(): Observable<iOfferProductsObj> {
    return this._HttpClient.get<iOfferProductsObj>(this.apiUrl)
  }



}
