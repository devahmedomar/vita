// shop.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { iProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopBreadCrumbData: Ibreadcrumb = {
    title: 'Shop',
    prev: 'home'
  };
  products: iProduct[] = [];
  paginatedProducts: iProduct[] = [];
  pageIndex = 0;
  pageSize = 12;
  totalItems = 0;
  selectedSortOption = 'default';

  constructor(private productService: ProductService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.spinner.show();
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        if (data && data.success) {
          this.products = data.data.products;
          this.totalItems = this.products.length;
          this.paginateAndSort();
        } else {
          console.error('Error fetching products:', data.message);
        }
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching products', error);
        this.spinner.hide();
      }
    );
  }

  paginateAndSort(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, startIndex + this.pageSize);
    this.sortProducts();
  }

  sortProducts(): void {
    switch (this.selectedSortOption) {
      case 'popularity':
        this.sortByPopularity();
        break;
      case 'rating':
        this.sortByAverageRating();
        break;
      case 'latest':
        this.sortByLatest();
        break;
      case 'lowToHigh':
        this.sortByPriceLowToHigh();
        break;
      case 'highToLow':
        this.sortByPriceHighToLow();
        break;
      default:
        break;
    }
  }

  sortByPopularity(): void {
    this.paginatedProducts.sort((a, b) => b.stockQuantity - a.stockQuantity);
  }

  sortByAverageRating(): void {
    this.paginatedProducts.sort((a, b) => b.rating - a.rating);
  }

  sortByLatest(): void {
    this.paginatedProducts.sort((a, b) => b.productId - a.productId);
  }

  sortByPriceLowToHigh(): void {
    this.paginatedProducts.sort((a, b) => a.price - b.price);
  }

  sortByPriceHighToLow(): void {
    this.paginatedProducts.sort((a, b) => b.price - a.price);
  }

  onSortOptionChange(event: any): void {
    if (event && event.target && event.target.value) {
      this.selectedSortOption = event.target.value;
      this.pageIndex = 0;
      this.paginateAndSort();
    }
  }

  nextPage(): void {
    if (this.pageIndex < this.totalPages - 1) {
      this.pageIndex++;
      this.paginateAndSort();
      this.scrollToTop();
    }
  }

  prevPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.paginateAndSort();
      this.scrollToTop();
    }
  }

  scrollToTop(): void {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get sortedProducts(): iProduct[] {
    return this.paginatedProducts;
  }
}
