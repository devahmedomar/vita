import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IMainCategory } from 'src/app/models/icategory';
import { LoginService } from 'src/app/services/auth/login/login.service';
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
  isLoggedIn$: Observable<boolean>;

  constructor(private categoryService: CategoryService, private cartService: CartService, private router: Router, private loginService: LoginService) {
    this.cartCount$ = this.cartService.cartCount$;
    this.isLoggedIn$ = this.loginService.isLoggedIn$();
  }

  ngOnInit() {
    this.categoryService.getMainandSubCategories().subscribe((data: any) => {
      if (data && data.success) {
        this.mainCategories = data.data.mainCategories;
      }
    });
  }

  signOut(): void {
    this.loginService.logout();
    this.router.navigate(['/auth']);
  }

  toggleSearchBar() {
    this.router.navigate(['/search']);
  }
}
