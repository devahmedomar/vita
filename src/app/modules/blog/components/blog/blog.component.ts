import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { posts } from 'src/app/models/blog';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';

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
  itemsPerPage: number = 6; // Updated items per page to match API response
  paginatedBlogArr: posts[] = [];
  tags: string[] = [];
  noResults: boolean = false;
  loading: boolean = false;
  maxVisiblePages: number = 4; // maximum pages to display at a time
  selectedTag: string | null = null;

  get visiblePages(): number[] {
    const half = Math.floor(this.maxVisiblePages / 2);
    let start = Math.max(1, this.currentPage - half);
    let end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);

    if (end - start < this.maxVisiblePages - 1) {
      start = Math.max(1, end - this.maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  constructor(
    private _BlogService: BlogService,
    private _sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.fetchTags();
  }

  fetchTags(): void {
    this._BlogService.getTags().subscribe({
      next: (response: any) => {
        if (response.success && response.message === 'tags') {
          this.tags = response.data;
        } else {
          console.error('Error fetching tags:', response);
        }
      },
      error: (error) => {
        console.error('Error fetching tags:', error);
      },
    });
  }

  fetchData(tag?: string | null): void {
    this.loading = true;
    this.spinner.show();

    this._BlogService.getBlogs(this.currentPage - 1, this.itemsPerPage, tag).subscribe({
      next: (response) => {
        this.blogArr = response.data.posts.content;
        this.totalPages = response.data.posts.totalPages;
        console.log(this.blogArr);

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
  }

  sortAndPaginate(): void {
    this.blogArr.sort((a, b) => {
      return new Date(b.creation).getTime() - new Date(a.creation).getTime();
    });
    this.paginate();
    this.updateSafeBlogContent();
  }

  updateSafeBlogContent(): void {
    this.safeBlogContent = this.blogArr.map((post) =>
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
    this.currentPage=1;
    this.paginate();
    this.updateSafeBlogContent();
  }

  filterByTerm(): void {
    const filteredBlogs = this.blogArr.filter((blog) =>
      blog.title.toLowerCase().includes(this.term.toLowerCase())
    );
    this.blogArr = (filteredBlogs);


    if (filteredBlogs.length === 0) {
      this.noResults = true;
      this.paginatedBlogArr=[];
      this.fetchData(this.selectedTag);
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
      this.loading = true;
      this.currentPage = page;
      this.fetchData(this.selectedTag); // Refetch data for the new page
      this.loading = false;
    }
  }

  filterByTag(tag: string | null): void {
    this.selectedTag = tag;
    this.currentPage = 1;
    this.fetchData(tag);
  }
}
