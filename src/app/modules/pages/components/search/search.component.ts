import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { IMainCategory } from 'src/app/models/icategory';
import { iProduct } from 'src/app/models/iproduct';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: { categories: IMainCategory[], products: iProduct[] } = { categories: [], products: [] };

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private location : Location,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  performSearch() {
    if (this.searchQuery) {
      this.categoryService.searchCategories(this.searchQuery).subscribe({
        next: categories => this.searchResults.categories = categories,
        error: error => {
          console.error('Error searching categories:', error);
          alert('Error searching categories. Please try again later.');
        }
      });

      this.productService.searchProducts(this.searchQuery).subscribe({
        next: products => this.searchResults.products = products,
        error: error => {
          console.error('Error searching products:', error);
          alert('Error searching products. Please try again later.');
        }
      });
    } else {
      this.searchResults = { categories: [], products: [] };
    }
  }

  goBack() {
    this.location.back();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }  
}
