import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl: string = environment.baseUrl + 'v4/public/post/all';
  constructor(private _HttpClient:HttpClient){}

  getBlogs(): Observable<Blog> {
    return this._HttpClient.get<Blog>(this.apiUrl)
  }

  getSingleBlog(blogId: any): Observable<any> {
    return this._HttpClient.get(
      `https://api.vitaparapharma.com/api/v1/public/post/${blogId}`
    );
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
