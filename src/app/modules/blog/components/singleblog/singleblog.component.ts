import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from 'src/app/services/blog/blog.service';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { Iproductcard } from 'src/app/models/iproductcard';
import { ToastrService } from 'ngx-toastr';

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
    private _LoginService: LoginService,
    private toaster:ToastrService
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
            const storedState = localStorage.getItem(`blog-${blogId}-like-dislike`);
            if (storedState) {
              const { liked, disliked } = JSON.parse(storedState);
              this.alreadyLiked = liked;
              this.alreadyDisliked = disliked;
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
        this._BlogService.likePost(this.blog.blogPostId, this.userToken).subscribe({
          next: () => {
            if (this.alreadyDisliked) {
              this.blog.dislikes--;
              this.alreadyDisliked = false;
            }
            this.blog.likes++;
            this.alreadyLiked = true;
            this.updateLocalStorage();
            this.toaster.success("Post Liked successfully")
          },

        });
      } else {
        this._BlogService.unlikePost(this.blog.blogPostId, this.userToken).subscribe({
          next: () => {
            this.blog.likes--;
            this.alreadyLiked = false;
            this.updateLocalStorage();

          },

        });
      }
    } else if (!this.isLoggedIn) {
      window.alert("helllo")
      this.toaster.error('You need to Login to like this post.');
    }
  }
  notLoggedInAlert(){
    if (!this.isLoggedIn) {
      this.toaster.error('You need to Login First to interact with this post.');
    }
  }

  dislikeBlog(): void {
    if (this.isLoggedIn && this.blog && this.userToken) {
      if (!this.alreadyDisliked) {
        this._BlogService.dislikePost(this.blog.blogPostId, this.userToken).subscribe({
          next: () => {
            if (this.alreadyLiked) {
              this.blog.likes--;
              this.alreadyLiked = false;
            }
            this.blog.dislikes++;
            this.alreadyDisliked = true;
            this.updateLocalStorage();
            this.toaster.success("Post DisLiked successfully")
          },

        });
      } else {
        this._BlogService.unlikePost(this.blog.blogPostId, this.userToken).subscribe({
          next: () => {
            this.blog.dislikes--;
            this.alreadyDisliked = false;
            this.updateLocalStorage();
          },

        });
      }
    } else if (!this.isLoggedIn) {
      this.toaster.error('You need to Login to dislike this post.');
    }
  }

  private updateLocalStorage(): void {
    const blogId = this.blog.blogPostId;
    const state = {
      liked: this.alreadyLiked,
      disliked: this.alreadyDisliked,
    };
    localStorage.setItem(`blog-${blogId}-like-dislike`, JSON.stringify(state));
  }

  getFacebookShareUrl(blogId:number): string {
    const blogUrl = `https://www.vitaparapharma.com/blog/${blogId}`;
    const shareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(blogUrl)}`;
    return shareUrl;
  }
}
