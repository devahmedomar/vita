import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService implements OnDestroy {
  apiUrl: string = environment.baseUrl + 'v4/public/post/all';
  private langChangeSubscription: Subscription = new Subscription();

  constructor(
    private _HttpClient: HttpClient,
    private translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Initialize language from localStorage or default to 'en'
    this.translate.use(localStorage.getItem('lang') || 'en');

    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe(event => {
      this.refreshPage();
    });
  }

  getBlogs(): Observable<Blog> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    return this._HttpClient.get<Blog>(this.apiUrl, { headers });
  }

  getSingleBlog(blogId: any): Observable<any> {
    const language = this.translate.currentLang;
    const headers = new HttpHeaders().set('Accept-Language', language);
    return this._HttpClient.get(
      `https://api.vitaparapharma.com/api/v1/public/post/${blogId}`,
      { headers }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from language change events when the service is destroyed
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }
  getUserPost(postId: string, token: string): Observable<any> {
    const url = `https://api.vitaparapharma.com/api/v1/user/post/${postId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this._HttpClient.get(url, { headers });
  }

  likePost(postId: string, token: string): Observable<any> {
    const url = `https://api.vitaparapharma.com/api/v1/user/like/${postId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this._HttpClient.put(url, {}, { headers });
  }


  unlikePost(postId: string, token: string): Observable<any> {
    const url = `https://api.vitaparapharma.com/api/v1/user/unlike/${postId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this._HttpClient.delete(url, { headers });
  }


  dislikePost(postId: string, token: string): Observable<any> {
    const url = `https://api.vitaparapharma.com/api/v1/user/dislike/${postId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this._HttpClient.put(url, {}, { headers });
  }
}
