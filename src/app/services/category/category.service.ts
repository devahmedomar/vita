import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IMainCategory } from 'src/app/models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'https://api.vitaparapharma.com/api/v1/public/';
  private categories: IMainCategory[] = [];

  constructor(private _HttpClient: HttpClient, private translate: TranslateService) {}

  getMainandSubCategories(): Observable<IMainCategory[]> {
    const language = this.translate.currentLang || 'en'; // Ensure a default language
    const headers = new HttpHeaders().set('Accept-Language', language);
    return this._HttpClient.get<IMainCategory[]>(this.apiUrl + 'main-sub/category/all', { headers }).pipe(
      map((response: any) => {
        if (!response.success || !response.data || !Array.isArray(response.data.mainCategories)) {
          throw new Error('Invalid response format');
        }
        return response.data.mainCategories;
      }),
      catchError(error => {
        console.error('Error fetching categories:', error);
        return of([]);
      })
    );
  }

  searchCategories(query: string): Observable<IMainCategory[]> {
    const language = this.translate.currentLang || 'en'; // Ensure a default language
    const headers = new HttpHeaders().set('Accept-Language', language);
    return this._HttpClient.get<any>(`${this.apiUrl}main-sub/category/all`, { headers }).pipe(
      map((response: any) => {
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
