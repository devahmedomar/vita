import { Component, OnInit } from '@angular/core';
import { Blog, posts } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent implements OnInit {
  blogPosts: posts[] = [];

  constructor(private _BlogService:BlogService){}
  getBlogs(){
    this._BlogService.getBlogs().subscribe({
      next:(res) => {
        this.blogPosts = res.data.posts;
        console.log(this.blogPosts);

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
