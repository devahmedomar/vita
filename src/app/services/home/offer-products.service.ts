import { iOfferProductsObj } from '../../models/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OfferProductsService {
  apiUrl: string =
    environment.baseUrl + 'v4/public/product/offer/all?size=6&page=1';
  private langChangeSubscription: Subscription = new Subscription();

  constructor(
    private _HttpClient: HttpClient,
    private translate: TranslateService,
    private router: Router
  ) {
    this.translate.use(localStorage.getItem('lang') || 'en');
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.refreshPage();
        this.translate.use(localStorage.getItem('lang') || 'en')
      }
    );
  }
  private refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

  getOfferProducts(): Observable<iOfferProductsObj> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    return this._HttpClient.get<iOfferProductsObj>(this.apiUrl,{headers});
  }
}
