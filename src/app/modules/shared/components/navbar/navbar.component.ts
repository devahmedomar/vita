import { INotification } from 'src/app/models/inotification';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { IMainCategory } from 'src/app/models/icategory';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mainCategories: IMainCategory[] | undefined;
  cartCount$: Observable<number>;
  isLoggedIn$: Observable<boolean>;
  notifications: INotification[] = [];
  showNotifications = false;
  isMobile: boolean = false;
  isDesktop: boolean = true;
  lang: string = '';
  isRTL: boolean = false;
  private langChangeSubscription: Subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private translate: TranslateService
  ) {
    this.cartCount$ = this.cartService.cartCount$;
    this.isLoggedIn$ = this.loginService.isLoggedIn$();
  }

  ngOnInit() {
    this.fetchCategories();
    this.fetchNotifications();
    this.checkScreenSize();
    this.lang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.lang);
    this.updateDirection(this.lang);

    this.langChangeSubscription = this.translate.onLangChange.subscribe((event) => {
      this.fetchCategories();
      this.updateDirection(event.lang);
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth >= 991.98;
    this.isMobile = window.innerWidth <= 991.98;
  }

  signOut(): void {
    this.loginService.logout();
    this.router.navigate(['/auth']);
  }

  toggleSearchBar() {
    this.router.navigate(['/search']);
  }

  fetchCategories(): void {
    this.categoryService.getMainandSubCategories().subscribe((data: IMainCategory[]) => {
      this.mainCategories = data;
    });
  }

  fetchNotifications(): void {
    if (this.loginService.isLoggedIn$()) {
      this.notificationService.getNotifications().subscribe(
        (data: INotification[]) => (this.notifications = data),
        (error) => console.error('Error fetching notifications', error)
      );
    } else {
      this.notifications = [];
    }
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  unreadNotificationsCount(): number {
    return this.notifications.filter((notification) => !notification.read).length;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  navigateToSubCategory(categoryId: number) {
    this.router.navigate(['/shop'], { queryParams: { category: categoryId } });
  }

  navigateToMainCategory(mainCategoryId: number): void {
    this.router.navigate(['/shop'], {
      queryParams: { mainCategory: mainCategoryId },
    });
  }

  changeLang(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang', selectedLanguage);
    this.translate.use(selectedLanguage);
    this.updateDirection(selectedLanguage);
  }

  updateDirection(lang: string) {
    this.isRTL = lang === 'ar';
    const direction = this.isRTL ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-dir="direction-sensitive"]').forEach((el) => {
      (el as HTMLElement).setAttribute('dir', direction);
    });
  }
}
