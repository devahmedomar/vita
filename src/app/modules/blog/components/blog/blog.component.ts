import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { posts } from 'src/app/models/blog';
import { NgxSpinnerService } from 'ngx-spinner';

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
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 5;
  paginatedBlogArr: posts[] = [];
  tags: string[] = [];
  noResults: boolean = false;
  loading: boolean = false; 

  constructor(
    private _BlogService: BlogService,
    private _sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService 
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.loading = true;
    this.spinner.show();

    this._BlogService.getBlogs().subscribe({
      next: (response) => {
        this.blogArr = response.data.posts;
        this.sortAndPaginate();
        this.spinner.hide(); 
        this.loading = false; 
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
        this.spinner.hide();
        this.loading = false;
      },
    });

    this._BlogService.getTags().subscribe({
      next: (response: any) => {
        if (response.success && response.message === 'tags') {
          this.tags = response.data;
        } else {
          console.error('Error fetching tags:', response);
        }
        this.spinner.hide(); 
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching tags:', error);
        this.spinner.hide(); 
        this.loading = false; 
      },
    });
  }

  sortAndPaginate(): void {
    this.blogArr.sort((a, b) => {
      return new Date(b.creation).getTime() - new Date(a.creation).getTime();
    });
    this.calculateTotalPages();
    this.paginate();
    this.updateSafeBlogContent();
  }

  updateSafeBlogContent(): void {
    this.safeBlogContent = this.paginatedBlogArr.map((post) =>
      this._sanitizer.bypassSecurityTrustHtml(
        this.transformContent(post.content)
      )
    );
  }

  search(): void {
    if (!this.term.trim()) {
      this.resetSearch();
    } else {
      this.filterByTerm();
    }
  }

  resetSearch(): void {
    this.term = '';
    this.noResults = false;
    this.paginate();
    this.updateSafeBlogContent();
  }

  filterByTerm(): void {
    const filteredBlogs = this.blogArr.filter((blog) =>
      blog.title.toLowerCase().includes(this.term.toLowerCase())
    );
    this.term = '';

    if (filteredBlogs.length === 0) {
      this.noResults = true;
      this.fetchData();
    } else {
      this.noResults = false;
      this.totalPages = Math.ceil(filteredBlogs.length / this.itemsPerPage);
      this.paginate(filteredBlogs);
    }
    this.updateSafeBlogContent();
  }

  transformContent(content: string): string {
    return content.split(' ').slice(0, 30).join(' ');
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.blogArr.length / this.itemsPerPage);
  }

  paginate(filteredBlogs?: posts[]): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    if (filteredBlogs && filteredBlogs.length > 0) {
      this.paginatedBlogArr = filteredBlogs.slice(startIndex, endIndex);
    } else {
      this.paginatedBlogArr = this.blogArr.slice(startIndex, endIndex);
    }
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginate();
      this.updateSafeBlogContent();
    }
  }
}
