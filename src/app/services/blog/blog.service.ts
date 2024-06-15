import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl: string = environment.baseUrl + 'v4/public/post/all';
  blogByIdUrl: string = "https://api.vitaparapharma.com/api/v1/public/post/";
  constructor(private _HttpClient:HttpClient){}
  getBlogs(): Observable<Blog> {
    return this._HttpClient.get<Blog>(this.apiUrl)
  }

  getSingleBlog(blogId: any): Observable<any> {
    return this._HttpClient.get(
      `https://api.vitaparapharma.com/api/v1/public/post/${blogId}`
    );
  }

  // getBlogPostById(postId: number): Observable<Blog> {
  //   const url = `${this.blogByIdUrl}${postId}`;
  //   return this._HttpClient.get<Blog>(url);
  // }
}
