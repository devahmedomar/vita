import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProduct } from 'src/app/models/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "";
  ProductUrl: string = "https://api.vitaparapharma.com/api/v3/public/product";

  constructor(private _HttpClient: HttpClient) { }

  getSingleProduct(id:number): Observable<any> {
    this.apiUrl = environment.baseUrl + 'v4/public/product/'+id;
    return this._HttpClient.get<any>(this.apiUrl)
  }
  getCategoryListOfProduct(id:number):Observable<any>{
    this.apiUrl = environment.baseUrl + 'v1/public/category/all-lang/'+id;
    return this._HttpClient.get<any>(this.apiUrl)
  }
  getAllProducts(): Observable<iProduct[]> {
    return this._HttpClient.get<iProduct[]>(this.ProductUrl + '/all');
  }

  getProductsByCategory(categoryId: number): Observable<any[]> {
    return this._HttpClient.get<any[]>(`${this.ProductUrl + '/category/'}${categoryId}`);
  }

}