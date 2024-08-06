import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { iProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  current_page: number = 1;
  total_records: number = 1;
  shopBreadCrumbData: Ibreadcrumb = {
    title: 'Shop',
    prev: 'home'
  };
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.first = event.first!;
    this.rows = event.rows!;
    this.current_page = Math.floor(event.first / event.rows) + 1;
    this.fetchProducts();
  }
  products: iProduct[] = [];
  paginatedProducts: iProduct[] = [];
  pageIndex = 0;
  pageSize = 12;
  totalItems = 0;
  selectedSortOption = 'default';

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const mainCategoryId = +params['mainCategory'];
      const subCategoryId = +params['category'];

      // this.clearProductData();

      if (mainCategoryId) {
        this.fetchProductsByMainCategory(mainCategoryId);
        console.log("main");

      } else if (subCategoryId) {
        this.fetchProductsBySubCategory(subCategoryId);
        console.log("sub");

      } else {
        this.fetchProducts();
        console.log("all");

      }
    });
  }


  fetchProducts(): void {
    this.spinner.show();
    this.productService.getAllProducts(this.rows, this.current_page).subscribe(
      (data: any) => {
        if (data && data.success) {
          this.products = data.data.products;
          this.total_records = data.data.count;
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

  fetchProductsBySubCategory(categoryId: number): void {
    this.spinner.show();
    this.productService.getProductsBySubCategory(categoryId, this.rows, this.current_page).subscribe(
      (data: any) => {
        if (data && data.success && Array.isArray(data.data.products)) {
          this.products = data.data.products;
          this.total_records = this.products.length;
          // this.paginateAndSort();
        } else {
          console.error('Error fetching products or unexpected data format');
        }
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching category products', error);
        this.spinner.hide();
      }
    );
  }

  fetchProductsByMainCategory(mainCategoryId: number): void {
    this.spinner.show();
    this.productService.getProductsByMainCategory(mainCategoryId, this.rows, this.current_page).subscribe(
      (data: any) => {
        this.products = data.data.products;
        this.total_records = this.products.length;
        console.log(this.products, this.total_records);

        this.paginateAndSort();
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching products by main category:', error);
        this.spinner.hide();
      }
    );
  }

  paginateAndSort(): void {

    this.sortProducts();
    // const startIndex = (this.current_page - 1) * this.rows;
    // this.products = this.products.slice(startIndex, startIndex + this.rows);
    // console.log(this.products,startIndex,this.rows);
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
    this.products.sort((a, b) => b.stockQuantity - a.stockQuantity);
  }

  sortByAverageRating(): void {
    this.products.sort((a, b) => b.rating - a.rating);
  }

  sortByLatest(): void {
    this.products.sort((a, b) => b.productId - a.productId);
  }

  sortByPriceLowToHigh(): void {
    this.products.sort((a, b) => a.priceBeforeDiscount - b.priceBeforeDiscount);
  }

  sortByPriceHighToLow(): void {
    this.products.sort((a, b) => b.priceBeforeDiscount - a.priceBeforeDiscount);
  }

  onSortOptionChange(event: any): void {
    if (event && event.target && event.target.value) {
      this.selectedSortOption = event.target.value;
      console.log(this.selectedSortOption);
      this.paginateAndSort();
    }
  }

  // nextPage(): void {
  //   if (this.pageIndex < this.totalPages - 1) {
  //     this.pageIndex++;
  //     this.paginateAndSort();
  //     this.scrollToTop();
  //   }
  // }

  // prevPage(): void {
  //   if (this.pageIndex > 0) {
  //     this.pageIndex--;
  //     this.paginateAndSort();
  //     this.scrollToTop();
  //   }
  // }

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
