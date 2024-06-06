import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory, IMainCategory } from 'src/app/models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'https://api.vitaparapharma.com/api/v1/public/';

  constructor(private _HttpClient: HttpClient) {}
  getMainandSubCategories(): Observable<IMainCategory[]> {
    return this._HttpClient.get<IMainCategory[]>(this.apiUrl + 'main-sub/category/all');
  }
}
