import { FormsModule, NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Blog, posts } from 'src/app/models/blog';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { BlogService } from 'src/app/services/blog/blog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogBreadCrumbData: Ibreadcrumb = {
    title: 'blog',
    prev: 'home',
  };
  term: string = '';
  blogArr: posts[] = [];
  safeBlogContent: SafeHtml[] = [];

  constructor(
    private _BlogService: BlogService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this._BlogService.getBlogs().subscribe({
      next: (response) => {
        console.log(response);
        this.blogArr = response.data.posts;
        this.blogArr.forEach((post) => {
          const sanitizedContent = this._sanitizer.bypassSecurityTrustHtml(
            this.transformContent(post.content)
          );
          this.safeBlogContent.push(sanitizedContent);
        });
      },
    });
  }
  transformContent(content: string): string {
    return content.split(' ').slice(0, 50).join(' ');
  }
}
