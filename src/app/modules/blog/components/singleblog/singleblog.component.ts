import { posts, Blog } from 'src/app/models/blog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproductcard } from 'src/app/models/iproductcard';
import { BlogService } from 'src/app/services/blog/blog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css'],
})
export class SingleblogComponent implements OnInit {
  relatedProducts: Iproductcard[] = [];
  safeBlogContent: SafeHtml = '';

  constructor(
    private _BlogService: BlogService,
    private _ActivatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}
  // ngOnInit(): void {
  //   // this.relatedProducts=[
  //   //   {
  //   //     id:10,
  //   //     haveSale: false,
  //   //     imgURL: "assets/images/product.png",
  //   //     productName: "Airbrush Matte",
  //   //     productDescription: "Skin-perfecting bronzed filter for the face.",
  //   //     productPrice: 50.00,
  //   //     productRate: 4,

  //   //   },
  //   //   {
  //   //     id:11,
  //   //     haveSale: false,
  //   //     imgURL: "assets/images/product.png",
  //   //     productName: "Airbrush Matte",
  //   //     productDescription: "Skin-perfecting bronzed filter for the face.",
  //   //     productPrice: 60.00,
  //   //     productRate: 3,
  //   //     sale: 14
  //   //   },
  //   //   {
  //   //     id:12,
  //   //     haveSale: false,
  //   //     imgURL: "assets/images/product.png",
  //   //     productName: "Airbrush Matte",
  //   //     productDescription: "Skin-perfecting bronzed filter for the face.",
  //   //     productPrice: 100.00,
  //   //     productRate: 2,
  //   //     sale: 10
  //   //   }

  //   // ]
  // }

  blog: any; // Declare blog object to hold the fetched blog data
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        let blogId: any = param.get('id');

        this._BlogService.getSingleBlog(blogId).subscribe({
          next: (response) => {
            // Assign the fetched blog data to the blog object
            this.blog = response.data.post;
            console.log(this.blog);
            this.safeBlogContent = this._sanitizer.bypassSecurityTrustHtml(
              this.blog.content
            );
          },
          error: (error) => {
            console.error('Error fetching single blog:', error);
          },
        });
      },
    });
  }

  // likeBlog() {
  //   if (this.blog && this.blog.blogPostId) {
  //     this._BlogService.like(this.blog.blogPostId).subscribe({
  //       next: (response) => {
  //         // Update the likes count in the component
  //         this.blog.likes++;
  //         // Handle successful like
  //         console.log('Blog liked successfully!', response);
  //       },
  //       error: (error) => {
  //         // Handle error
  //         console.error('Error liking blog:', error);
  //       },
  //     });
  //   } else {
  //     console.error('Blog ID is not available!');
  //   }
  // }
}
