import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Blog, posts } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent implements OnInit {
  blogPosts: posts[] = [];
  private langChangeSubscription: Subscription=new Subscription();
  constructor(private _BlogService:BlogService, private router: Router,private translate: TranslateService){}
  getBlogs(){
    this._BlogService.getBlogs().subscribe({
      next:(res) => {
        this.blogPosts = res.data.posts;
        this.blogPosts.sort((a, b) => {
          return new Date(b.creation).getTime() - new Date(a.creation).getTime();
        });
        // console.log(this.blogPosts);

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.getBlogs();
    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getBlogs();
    });
  }
  ngOnDestroy(): void {
    // Unsubscribe from language change events when the component is destroyed
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
  navigateToBlog(blogPostId: number) {
    this.router.navigate(['/blog', blogPostId]);
  }
}
