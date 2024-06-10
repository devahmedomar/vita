import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iadvertisement } from 'src/app/models/iadvertisement';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private apiUrl = 'https://api.vitaparapharma.com/api/v1/public/advertisement/';

  constructor(private _HttpClient: HttpClient) {}

  getAdvertisements(): Observable<Iadvertisement[]> {
    return this._HttpClient
      .get<{
        success: boolean;
        message: string;
        data: { advertisements: Iadvertisement[] };
      }>(`${this.apiUrl}/all`)
      .pipe(map((response) => response.data.advertisements));
  }

  getAdvertisementById(adId: number): Observable<Iadvertisement> {
    return this._HttpClient.get<{ success: boolean; message: string; data: { advertisement: Iadvertisement } }>(`${this.apiUrl}/${adId}`)
      .pipe(
        map(response => response.data.advertisement)
      );
  }
}
