import { Iproductcard } from './../../../../models/iproductcard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icategory } from 'src/app/models/icategory';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IReview } from 'src/app/models/ireview';
import { ReviewService } from 'src/app/services/review/review.service';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  profileImageUrl: string | null = null;
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' = 'success';
  isLoggedIn: boolean = false;
  rate: number = 4;
  prodNumber: number = 1;
  activeIndex: number = 0;
  productId: string = '';
  categoryId: number = 0;
  singleProduct: any;
  safeProductDescription: SafeHtml = '';
  category: Icategory | undefined;
  isInWishlist: boolean = false;
  isInCart: boolean = false;
  reviews: IReview[] = [];
  relatedProducts: Iproductcard[] = [];
  newReview: { rating: number; comment: string } = { rating: 0, comment: '' };
  currentRating: number = 0;
  existingReview: IReview | null = null;
  selectedQuantity: number = 1;
  @ViewChild('reviewForm') reviewForm!: NgForm;

  constructor(
    private route: ActivatedRoute,
    private _ProductService: ProductService,
    private sanitizer: DomSanitizer,
    private loginService: LoginService,
    private cartService: CartService,
    private spinner: NgxSpinnerService,
    private reviewService: ReviewService,
    private profileService: ProfileService,
    private toaster: ToastrService,
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {

    this.loginService.isLoggedIn$().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
      if (this.isLoggedIn) {
        this.checkWishlistStatus();
        this.checkCartStatus();
      }
    });

    this.getSingleProduct();
    this.loadReviews();

    if (this.isLoggedIn)
      this.fetchUserReview();

    this.cartService.getSelectedQuantity().subscribe(quantity => {
      this.selectedQuantity = quantity;
    });
    this.loadUserProfile();
  }
  loadUserProfile() {
    const authToken = localStorage.getItem('eToken');

    if (authToken) {
      this.profileService.getProfile().subscribe(
        response => {
          if (response && response.data && response.data.user) {
            this.profileImageUrl = response.data.user.picture || 'assets/images/icons/user.png';
          } else {
            this.profileImageUrl = 'assets/images/icons/user.png';
          }
        },
        error => {
          console.error('Error fetching profile data', error);
          this.profileImageUrl = 'assets/images/icons/user.png';
        }
      );
    } else {
      this.profileImageUrl = 'assets/images/icons/user.png';
    }
  }

  getSingleProduct() {
    this.spinner.show();
    this._ProductService.getSingleProduct(+this.productId).subscribe({
      next: (res) => {
        this.singleProduct = res.data.product;
        this.categoryId = this.singleProduct.categoryId;
        this.getCategoriesById();
        this.safeProductDescription = this.sanitizer.bypassSecurityTrustHtml(
          this.singleProduct.description
        );
        this.fetchSelectedQuantity();
        this.spinner.hide();
      },

      error: (err: any) => {
        console.log(err);
        this.spinner.hide();
      },
    });
  }

  fetchSelectedQuantity() {
    const cartItem = localStorage.getItem(`product_${this.productId}_quantity`);
    this.selectedQuantity = cartItem ? JSON.parse(cartItem) : 1;
  }

  getCategoriesById() {
    this._ProductService.getCategoryListOfProduct(this.categoryId).subscribe({
      next: (res: any) => {
        this.category = res.data.category;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  discount: number = 0;
  hasDiscount() {
    // this.discount =  ((this.singleProduct.priceBeforeDiscount - this.singleProduct.priceAfterDiscount) / this.singleProduct.priceBeforeDiscount) * 100;
    const discount = ((this.singleProduct.priceBeforeDiscount - this.singleProduct.priceAfterDiscount) / this.singleProduct.priceBeforeDiscount) * 100;
    this.discount = Math.round(discount * 100) / 100; // Round to two decimal places
    return this.singleProduct && this.singleProduct.discount;
  }
  addtoCartNotLoggedIn() {
    if (!this.isLoggedIn) {
      this.translate.get('errorMsgs.notLoggedInCart').subscribe((translatedMsg: string) => {
        this.toaster.error(translatedMsg);
        this.router.navigate(['/auth/login']);
      });
    }
  }
  toggleCartAction() {
    if (this.singleProduct && this.singleProduct.inCart) {
      this.onRemoveFromCart(this.singleProduct.productId);
    } else if (this.singleProduct) {
      this.onAddToCart(this.singleProduct.productId);
    }
  }

  checkCartStatus() {
    const cartItem = localStorage.getItem(`product_${this.productId}_inCart`);
    this.isInCart = cartItem ? JSON.parse(cartItem) : false;
  }

  onAddToCart(productId: number) {
    if (!this.isLoggedIn) {
      this.showNotification('Please login first.', 'error');
      return;
    }

    this.cartService.updateCart(productId, this.selectedQuantity).subscribe(
      () => {
        this.isInCart = true;
        localStorage.setItem(`product_${productId}_inCart`, 'true');
        localStorage.setItem(`product_${productId}_quantity`, JSON.stringify(this.selectedQuantity));
        this.showNotification('Item added to cart', 'success');
      },
      (error) => {
        console.error('Failed to add item to cart:', error);
        this.showNotification('Failed to add item to cart', 'error');
      }
    );
  }

  onRemoveFromCart(productId: number) {
    this.cartService.removeFromCart(productId).subscribe(
      (response) => {
        this.isInCart = false;
        localStorage.removeItem(`product_${productId}_inCart`);
        this.showNotification('Item removed from cart', 'success');
        this.selectedQuantity = 1;
      },
      (error) => {
        console.error('Failed to remove item from cart:', error);
        this.showNotification('Failed to remove item from cart', 'error');
      }
    );
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.notificationMessage = message;
    this.notificationType = type;
    if (this.notificationType == "success") {

      this.toaster.success(this.notificationMessage)
    } else {
      this.toaster.error(this.notificationMessage)

    }

  }

  clearNotification() {
    this.notificationMessage = null;
  }

  checkWishlistStatus() {
    // console.log('Checking wishlist status for productId:', this.productId);

    this._ProductService.getWishlist().subscribe({
      next: (wishlist: any[]) => {
        // console.log('Wishlist:', wishlist);
        this.isInWishlist = wishlist.some(
          (item) => {
            console.log(item);

            return item.toString() === this.productId.toString()}
        );
        // console.log('isInWishlist:', this.isInWishlist);
      },
      error: (err) => {
        // console.error('Error fetching wishlist:', err);
      },
    });
  }

  addToWishlist(productId: string) {
    this._ProductService.addToWishlist(productId).subscribe({
      next: (res) => {
        // console.log('Product added to wishlist:', res);
        this.isInWishlist = true;
      },
      error: (err) => {
        // console.error('Error adding to wishlist:', err);
      },
    });
  }

  removeFromWishlist(productId: string) {
    this._ProductService.removeFromWishlist(productId).subscribe({
      next: (res) => {
        // console.log('Product removed from wishlist:', res);
        this.isInWishlist = false;
      },
      error: (err) => {
        // console.error('Error removing from wishlist:', err);
      },
    });
  }

  toggleWishlist(productId: string) {
    if (!this.isLoggedIn) {
      this.showNotification('Please login first.', 'error');
      return;
    }
    if (this.isInWishlist) {
      this.removeFromWishlist(productId);
      this.toaster.success("Removed Successfully From Wishlist")

    } else {
      this.addToWishlist(productId);
      this.toaster.success("Added Successfully From Wishlist")
    }
  }

  fetchProductRating() {
    this._ProductService
      .getSingleProduct(this.singleProduct.productId)
      .subscribe(
        (product: any) => {
          this.singleProduct.reviews = product.rating;
        },
        (error) => {
          console.error('Error fetching product rating:', error);
        }
      );
  }

  getStars(rating: number): number[] {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;
    const stars: number[] = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(1);
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(0);
    }

    return stars;
  }

  setRating(rating: number): void {
    this.currentRating = rating;
    this.newReview.rating = rating;
  }

  loadReviews(): void {
    const productIdNumber = Number(this.productId);

    if (isNaN(productIdNumber)) {
      console.error('Invalid productId:', this.productId);
      return;
    }

    this.reviewService.getAllReviews(productIdNumber).subscribe(
      (response: any) => {
        if (response.success) {
          this.reviews = response.data.reviews.map((review: any) => ({
            ...review,
            dateCreated: new Date(review.dataCreated),
          }));
        } else {
          console.error('Failed to fetch reviews:', response.message);
        }
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }

  fetchUserReview() {
    this.loginService.isLoggedIn$().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        const token = this.loginService.getAuthToken();
        if (token) {
          const email = this.loginService.getCurrentUserEmail();
          this.reviewService.getReview(+this.productId, email).subscribe({
            next: (review) => {
              if (review && review.email === email) {
                this.existingReview = review;
                this.newReview.rating = review.rating;
                this.newReview.comment = review.comment;
                // console.log('Existing review:', this.existingReview);
              } else {
                this.existingReview = null;
                // console.log('No existing review for the current user.');
              }
            },
            error: (err) => {
              console.error('Error fetching user review:', err);
            }
          });
        }
      }
    });
  }

  hasUserReviewed(): boolean {
    return this.existingReview !== null;
  }

  submitReview(): void {
    const token = this.loginService.getAuthToken() as string;
    const productIdNumber = Number(this.productId);

    if (isNaN(productIdNumber)) {
      console.error('Invalid productId:', this.productId);
      return;
    }

    if (this.reviewForm.valid) {
      if (this.newReview.rating === 0) {
        this.showNotification('Rating is required.', 'error');
        return;
      }

      if (!this.newReview.comment || this.newReview.comment.length < 2 || this.newReview.comment.length > 200) {
        this.showNotification('Comment is required (2-200 characters).', 'error');
        return;
      }

      if (this.existingReview) {
        this.reviewService
          .updateReview(
            this.existingReview.reviewId,
            this.newReview.comment,
            this.newReview.rating,
            token
          )
          .subscribe(
            (response) => {
              console.log('Review updated successfully', response);
              this.fetchUserReview();
              this.loadReviews();
              this.showNotification('Review updated successfully', 'success');
              this.resetReviewForm();
            },
            (error) => {
              console.error('Error updating review:', error);
              this.showNotification('Error updating review', 'error');
            }
          );
      } else {
        this.reviewService
          .addReview(
            productIdNumber,
            this.newReview.comment,
            this.newReview.rating,
            token
          )
          .subscribe(
            (response) => {
              if (response.success) {
                // console.log('Review added successfully', response);
                this.fetchUserReview();
                this.loadReviews();
                this.showNotification('Review added successfully', 'success');
                this.resetReviewForm();
              } else {
                console.error('Failed to add review:', response.message);
                this.showNotification('Failed to add review: ' + response.message, 'error');
              }
            },
            (error) => {
              // console.error('Error adding review:', error);
              this.showNotification('You Must Login to leave comment review', 'error');
            }
          );
      }
    } else {
      this.showNotification('Form is invalid. Cannot submit review.', 'error');
    }
  }


  editReview(): void {
    if (!this.existingReview) {
      console.error('No existing review to edit');
      return;
    }

    const token = this.loginService.getAuthToken() as string;
    const reviewId = this.existingReview.reviewId;
    const newRating = +this.newReview.rating;

    if (this.reviewForm.valid && this.newReview.comment.length >= 2 && this.newReview.comment.length <= 200) {
      this.reviewService.updateReview(reviewId, this.newReview.comment, newRating, token)
        .subscribe(
          (response) => {
            if (response.success) {
              this.loadReviews();
              this.fetchUserReview();
              this.showNotification('Review updated successfully', 'success');
            } else {
              console.error('Failed to update review:', response.message);
              this.showNotification('Failed to update review: ' + response.message, 'error');
            }
          },
          (error) => {
            console.error('Error updating review:', error);
            this.showNotification('Error updating review', 'error');
          }
        );
    } else {
      this.showNotification('Form is invalid or comment length is not within limits.', 'error');
    }
  }

  resetReviewForm(): void {
    this.newReview = { rating: 0, comment: '' };
  }

  deleteReview(reviewId: number): void {
    const token = this.loginService.getAuthToken() as string;
    const productIdNumber = Number(this.productId);

    if (isNaN(productIdNumber)) {
      console.error('Invalid productId:', this.productId);
      return;
    }

    if (this.reviewForm.valid) {
      this.reviewService.deleteReview(reviewId, token)
        .subscribe(
          (response) => {
            if (response.success) {
              this.resetReviewForm();
              this.loadReviews();
              this.fetchUserReview();
              this.showNotification('Review deleted successfully', 'success');
              this.reviewForm.resetForm();
            } else {
              console.error('Failed to delete review:', response.message);
              this.showNotification('Failed to delete review: ' + response.message, 'error');
            }
          },
          (error) => {
            console.error('Error deleting review:', error);
            this.showNotification('Error deleting review', 'error');
          }
        );
    } else {
      this.showNotification('Form is invalid. Cannot delete review.', 'error');
    }
  }

}
