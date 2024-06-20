import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICity, ICountry, IRegion, IShippingAddress } from 'src/app/models/iaddress';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { Icart } from 'src/app/models/icart';
import { AddressService } from 'src/app/services/address/address.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  authToken: string | null = localStorage.getItem('eToken');
  addressForm: FormGroup;
  shippingAddresses: IShippingAddress[] = [];
  countries: ICountry[] = [];
  cities: ICity[] = [];
  regions: IRegion[] = [];
  defaultCountryName = 'Morocco';
  cartProducts: Icart[] = [];
  cartSubtotal: number = 0;
  cartTotal: number = 0;
  shippingCost: number = 30;
  selectedAddressId: number = 0;
  errorMessage: string = '';
  
  checkoutBreadCrumbData: Ibreadcrumb = {
    prev: "home",
    title: "check out"
  };

  paymentForm: FormGroup;
  couponForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private addressService: AddressService, private cartService: CartService,  private orderService: OrderService) {
    this.paymentForm = this.fb.group({
      paymentMethod: ['cod'],
      bankName: [''],
      accountNumber: [''],
      accountHolderName: [''],
      cardNumber: [''],
      expirationDate: [''],
      cvv: [''],
      cardHolderName: [''],
      agreeToTerms: [false, Validators.requiredTrue]
    });

    this.couponForm = this.fb.group({
      couponCode: ['']
    });

    this.addressForm = this.fb.group({
      country: [null, Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', Validators.required],
      orderNotes: ['']
    });
  }

  ngOnInit(): void {
    this.loadCountries();
    this.loadShippingAddresses();
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(
      (cartData: any) => {
        if (cartData.success && cartData.data && cartData.data.cart && cartData.data.cart.cartItems) {
          this.cartProducts = cartData.data.cart.cartItems;
          // console.log('Cart Products:', this.cartProducts);
          this.calculateCartSubtotal();
        } else {
          console.error('Invalid cart data format:', cartData);
        }
      },
      error => {
        console.error('Failed to fetch cart data:', error);
      }
    );
  }
 
  

  calculateCartSubtotal() {
    this.cartProducts.forEach(product => {
      product.subtotal = product.quantity * product.productPrice;
    });
  
    this.cartSubtotal = this.cartProducts.reduce((total, product) => {
      return total + (product.subtotal || 0);
    }, 0);
  
    this.cartTotal = this.cartService.calculateCartTotal(this.cartSubtotal, this.shippingCost);
  }

   loadShippingAddresses() {
    if (this.authToken) {
      this.addressService.getAddresses(this.authToken).subscribe(
        (addresses: IShippingAddress[]) => {
          this.shippingAddresses = addresses;
        },
        (error) => {
          console.error('Error fetching addresses:', error);
        }
      );
    } else {
      console.error('Authentication token not found.');
    }
  }
  
  loadCountries() {
    this.addressService.getRegions().subscribe(
      countries => {
        this.countries = countries;
        const defaultCountry = this.countries.find(country => country.en === this.defaultCountryName);
        if (defaultCountry) {
          this.addressForm.patchValue({ country: defaultCountry.id });
          this.cities = defaultCountry.cities;
          this.onCountryChange({ target: { value: defaultCountry.id }});
        }
      },
      error => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  onCountryChange(event: any) {
    const countryId = event.target.value;
    const selectedCountry = this.countries.find(country => country.id === +countryId);
    this.cities = selectedCountry ? selectedCountry.cities : [];
    this.regions = [];
    this.addressForm.patchValue({ city: '', region: '' });
  }

  onCityChange(event: any) {
    const cityId = event.target.value;
    const selectedCity = this.cities.find(city => city.id === +cityId);
    this.regions = selectedCity ? selectedCity.regions : [];
    this.addressForm.patchValue({ region: '' });
  }

  onAddressSubmit() {
    if (this.addressForm.valid) {
      const addressPayload = {
        regionId: this.addressForm.value.region,
        zipCode: this.addressForm.value.zipCode,
        description: this.addressForm.value.description
      };
  
      this.addressService.addAddress(addressPayload).subscribe(
        response => {
          console.log('Address added successfully:', response);
          this.addressForm.reset();
          this.loadShippingAddresses();
        },
        error => {
          console.error('Error adding address:', error);
        }
      );
    } else {
      console.error('Address form is invalid');
    }
  }
  getAddressList(token: string): void {
    this.addressService.getAddresses(token).subscribe(
      (addresses) => {
        this.shippingAddresses = addresses;
      },
      (error) => {
        console.error('Error fetching addresses:', error);
      }
    );
  }
 
  onAddressSelection(addressId: number): void {
    this.selectedAddressId = addressId;
    console.log('Selected Address ID:', this.selectedAddressId);
  }


  onSubmit() {
    // console.log(this.paymentForm.value);
  }

  applyCoupon() {
    const couponCode = this.couponForm?.get('couponCode')?.value;
    console.log('Applying coupon:', couponCode);
  }

  placeOrder(): void {
    if (!this.selectedAddressId) {
      console.error('No address selected for delivery.');
      return;
    }
  
    const orderItems = this.cartProducts.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }));
  
    const coupon = this.couponForm.get('couponCode')?.value || '';
    console.log('Order Items:', orderItems);
    console.log('Coupon:', coupon);
    console.log('Selected Address ID:', this.selectedAddressId);
  
    if (this.authToken) {
      this.orderService.addOrder(this.authToken, this.selectedAddressId.toString(), orderItems, coupon).subscribe(
        (response: any) => {
          console.log('Order placed successfully:', response);
          // this.router.navigate(['/cart/placeorder']);
          this.router.navigate(['/cart/placeorder']);
        },
        (error: HttpErrorResponse) => {
          console.error('Error placing order:', error);
          if (error.error && error.error.message) {
            if (error.error.message === 'Entity Product have no sufficient amount') {
              this.errorMessage = 'One or more products in your order have insufficient quantity available.';
            } else {
              this.errorMessage = error.error.message;
            }
          } else {
            this.errorMessage = 'Failed to place order. Please try again later.';
          }
          console.error('Order Error:', this.errorMessage);
        }
      );
    } else {
      console.error('Authentication token not found.');
    }
  }
    
}
