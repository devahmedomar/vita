import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMainCategory } from 'src/app/models/icategory';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  mainCategories: IMainCategory[] | undefined;
  cartCount$: Observable<number>;
  constructor(private categoryService: CategoryService, private cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$;
  }
  ngOnInit() {
    this.categoryService.getMainandSubCategories().subscribe((data: any) => {
      if (data && data.success) {
        this.mainCategories = data.data.mainCategories;
        // console.log(this.mainCategories); 
      }
    });
  }
}
