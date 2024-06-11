import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { Iproductcard } from 'src/app/models/iproductcard';
import { iProduct } from 'src/app/models/iproduct';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shopBreadCrumbData: Ibreadcrumb = {
    title: 'shop',
    prev: 'home',
  };
  products: iProduct[] | undefined;
  paginatedProducts: iProduct[] = [];
  loading: boolean = false; 
  pageIndex: number = 0;
  pageSize: number = 12;
  totalItems: number = 0;
  selectedSortOption: string = 'default';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true; 

    this.productService.getAllProducts().subscribe(
      (data: any) => { 
        if (data && data.success) {
          this.products = data.data.products;
          if(this.products){
          this.totalItems = this.products.length;
          this.paginate();
          this.sortProducts();
          }
          // console.log(this.products);
        } else {
          // console.error('Error fetching products:', data.message);
        }
        this.loading = false; 
      },
      (error) => {
        // console.error('Error fetching products', error);
        this.loading = false; 
      }
    );
  }


  paginate(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedProducts = this.products?.slice(startIndex, startIndex + this.pageSize) || [];
  }

  nextPage(): void {
    if (this.pageIndex < this.totalPages - 1) {
      this.pageIndex++;
      this.paginate();
      this.scrollToTop();
    }
  }

  prevPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.paginate();
      this.scrollToTop();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
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
    this.paginatedProducts = this.paginatedProducts.sort((a, b) => a.price - b.price);
  }
  
  sortByPriceHighToLow(): void {
    this.paginatedProducts.sort((a, b) => b.price - a.price);
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
        this.paginatedProducts.sort((a, b) => a.productId - b.productId);
        break;
    }
  }

  onSortOptionChange(event: any): void {
    if (event && event.target && event.target.value) {
      this.selectedSortOption = event.target.value;
      this.sortProducts();
      this.pageIndex = 0;
      this.paginate();
    }
  }
  
  get sortedProducts(): iProduct[] {
    return this.paginatedProducts;
  }

  scrollToTop() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

