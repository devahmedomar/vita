import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl: string = environment.baseUrl + 'v1/public/post/all';
  constructor(private _HttpClient:HttpClient){}
  // getBlogs(): Observable<Blog> {
  //   return this._HttpClient.get<Blog>(this.apiUrl)
  // }

  getBlogs(): Observable<any> {
    return this._HttpClient.get(this.apiUrl)
  }
   
  getSingleBlog(id:string): Observable<any>{
    return this._HttpClient.get(`https://api.vitaparapharma.com/api/v1/public/post/${id}`);
  }
}
