import { INotification } from 'src/app/models/inotification';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { IMainCategory } from 'src/app/models/icategory';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Collapse } from 'bootstrap';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  mainCategories: IMainCategory[] | undefined;
  selectedCategory: IMainCategory | null = null;
  currentMenu: 'main' | 'categories' | 'subcategories' = 'main';
  cartCount$: Observable<number>;
  isLoggedIn$: Observable<boolean>;
  notifications: INotification[] = [];
  showNotifications = false;
  isMobile = false;
  isDesktop = true;
  lang = '';
  isRTL = false;
  private langChangeSubscription: Subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private elementRef: ElementRef
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
    this.getNotifiyUnread();
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  markAsRead(notification: INotification) {
    if (!notification.read) {
      notification.read = true;
      this.notificationService.markAsRead(notification.id).subscribe(
        () => console.log('Notification marked as read'),
        (error) => console.error('Error marking notification as read', error)
      );
    }
    this.navigateToOrderDetails(+notification.identifier);
    this.getNotifiyUnread();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showNotifications) {
      this.showNotifications = false;
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

  navigateToOrderDetails(orderId: number) {
    this.router.navigate(['/order-details', orderId]);
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
    this.closeNavbar();
    this.currentMenu = 'main';
  }

  navigateToMainCategory(mainCategoryId: number): void {
    this.router.navigate(['/shop'], { queryParams: { mainCategory: mainCategoryId } });
  }
  unreadNotifications:number=0;
  getNotifiyUnread() {
this.notificationService.getUnreadNotifications().subscribe({
  next:(res)=>{
this.unreadNotifications = res.data.unread;
  }
})
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

  closeNavbar() {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar) {
      const bsCollapse = Collapse.getInstance(navbar);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        new Collapse(navbar).hide();
      }
    }
  }

  // New methods for handling menu navigation
  showMainMenu() {
    this.currentMenu = 'main';
    this.selectedCategory = null;
  }

  showCategories() {
    this.currentMenu = 'categories';
    this.selectedCategory = null;
  }

  showSubcategories(category: IMainCategory) {
    this.selectedCategory = category;
    this.currentMenu = 'subcategories';
  }

  backToCategories() {
    this.currentMenu = 'categories';
  }

}
