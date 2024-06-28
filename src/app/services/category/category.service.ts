import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { IMainCategory } from 'src/app/models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'https://api.vitaparapharma.com/api/v1/public/';
  private categories: IMainCategory[] = [];
  
  constructor(private _HttpClient: HttpClient) {}
  getMainandSubCategories(): Observable<IMainCategory[]> {
    return this._HttpClient.get<IMainCategory[]>(this.apiUrl + 'main-sub/category/all');
  }
  
  searchCategories(query: string): Observable<IMainCategory[]> {
    return this._HttpClient.get<any>(`${this.apiUrl}main-sub/category/all`).pipe(
      map((response: any) => {
        // console.log('Categories API response:', response);
        if (!response.success || !response.data || !Array.isArray(response.data.mainCategories)) {
          throw new Error('Invalid response format');
        }
        return response.data.mainCategories.filter((category: IMainCategory) => 
          category.name.toLowerCase().includes(query.toLowerCase())
        );
      }),
      catchError(error => {
        console.error('Error searching categories:', error);
        return of([]);
      })
    );
  }
}
