import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from 'src/app/services/blog/blog.service';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { Iproductcard } from 'src/app/models/iproductcard';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css'],
})
export class SingleblogComponent implements OnInit {
  blog: any = {
    likes: 0,
    dislikes: 0,
  };
  relatedProducts: Iproductcard[] = [];
  safeBlogContent: SafeHtml = '';
  userToken: string | null = null;
  isLoggedIn: boolean = false;
  alreadyLiked: boolean = false;
  alreadyDisliked: boolean = false;
  localStorageKey: string = 'blogLikes';

  constructor(
    private _BlogService: BlogService,
    private _ActivatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _LoginService: LoginService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        let blogId: any = param.get('id');
        this._BlogService.getSingleBlog(blogId).subscribe({
          next: (response) => {
            this.blog = response.data.post;
            this.safeBlogContent = this._sanitizer.bypassSecurityTrustHtml(this.blog.content);

            this.blog.likes = this.blog.likes || 0;
            this.blog.dislikes = this.blog.dislikes || 0;

            const storedLikes = localStorage.getItem(this.localStorageKey);
            if (storedLikes) {
              const likesData = JSON.parse(storedLikes);
              if (likesData[this.blog.blogPostId]) {
                this.blog.likes = likesData[this.blog.blogPostId].likes || this.blog.likes;
                this.blog.dislikes = likesData[this.blog.blogPostId].dislikes || this.blog.dislikes;
                this.alreadyLiked = likesData[this.blog.blogPostId].liked || false;
                this.alreadyDisliked = likesData[this.blog.blogPostId].disliked || false;
              }
            }
          },
          error: (error) => {
            console.error('Error fetching single blog:', error);
          },
        });
      },
    });

    this._LoginService.isLoggedIn$().subscribe((status) => {
      this.isLoggedIn = status;
      this.userToken = this._LoginService.getAuthToken();
    });
  }

  likeBlog(): void {
    if (this.isLoggedIn && this.blog && this.userToken) {
      if (!this.alreadyLiked) {
        if (this.alreadyDisliked) {
          this.blog.dislikes--;
          this.alreadyDisliked = false;
        }

        this.blog.likes++;
        this.alreadyLiked = true;
        this.updateLocalStorage('like');
      } else {
        this.blog.likes--;
        this.alreadyLiked = false;
        this.updateLocalStorage('like');
      }
    } else {
      console.error('User not logged in or Blog ID is not available!');
      alert('You need to be logged in to like this post.');
    }
  }
  
  dislikeBlog(): void {
    if (this.isLoggedIn && this.blog && this.userToken) {
      if (!this.alreadyDisliked) {
        if (this.alreadyLiked) {
          this.blog.likes--;
          this.alreadyLiked = false;
        }
  
        this.blog.dislikes++;
        this.alreadyDisliked = true;
        this.updateLocalStorage('dislike');
      } else {
        this.blog.dislikes--; 
        if (this.blog.dislikes < 0) {
          this.blog.dislikes = 0;
        }
        this.alreadyDisliked = false;
        this.updateLocalStorage('dislike');
      }
    } else {
      console.error('User not logged in or Blog ID is not available!');
      alert('You need to be logged in to dislike this post.');
    }
  }
  
  
  private updateLocalStorage(action: string): void {
    const storedLikes = localStorage.getItem(this.localStorageKey);
    let likesData = storedLikes ? JSON.parse(storedLikes) : {};

    if (!likesData[this.blog.blogPostId]) {
      likesData[this.blog.blogPostId] = { likes: 0, dislikes: 0 };
    }
    if (action === 'like') {
      likesData[this.blog.blogPostId].likes = this.blog.likes;
      likesData[this.blog.blogPostId].liked = this.alreadyLiked;

      likesData[this.blog.blogPostId].dislikes = this.blog.dislikes;
      likesData[this.blog.blogPostId].disliked = this.alreadyDisliked;
    } else if (action === 'dislike') {
      likesData[this.blog.blogPostId].dislikes = this.blog.dislikes;
      likesData[this.blog.blogPostId].disliked = this.alreadyDisliked;

      likesData[this.blog.blogPostId].likes = this.blog.likes;
      likesData[this.blog.blogPostId].liked = this.alreadyLiked;
    }

    localStorage.setItem(this.localStorageKey, JSON.stringify(likesData));
  }
}
