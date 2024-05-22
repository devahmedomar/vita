import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutBreadCrumbData: Ibreadcrumb = {
    prev: "home",
    title: "check out"
  };

  paymentForm: FormGroup;
  couponForm: FormGroup;

  constructor(private fb: FormBuilder,private _Router:Router) {
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
  }

  onSubmit() {
    // console.log(this.paymentForm.value);
  }

  ngOnInit(): void {}

  applyCoupon() {
    const couponCode = this.couponForm?.get('couponCode')?.value;
    console.log('Applying coupon:', couponCode);
  }

  placeOrder(){
    this._Router.navigate(['/cart/placeorder'])
  }
}
