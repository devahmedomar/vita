import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { Iproductcard } from 'src/app/models/iproductcard';
import { ProductServiseService } from 'src/app/product-servise.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(public _ProductServiseService:ProductServiseService,private spinner: NgxSpinnerService){}
  shopBreadCrumbData: Ibreadcrumb = {
    title: "shop",
    prev: "home"
  }
  products: any[] = []




  ngOnInit(): void {
    this.spinner.show();
  //   this.products = [
  //     {
  //       id:1,
  //       haveSale: true,
  //       imgURL: "assets/images/product.png",
  //       productName: "Airbrush Matte",
  //       productDescription: "Skin-perfecting bronzed filter for the face.",
  //       productPrice: 50.00,
  //       productRate: 4,
  //       sale: 15
  //     },
  //     {
  //       id:2,
  //       haveSale: true,
  //       imgURL: "assets/images/product.png",
  //       productName: "Airbrush Matte",
  //       productDescription: "Skin-perfecting bronzed filter for the face.",
  //       productPrice: 60.00,
  //       productRate: 3,
  //       sale: 14
  //     },
  //     {
  //       id:3,
  //       haveSale: false,
  //       imgURL: "assets/images/product.png",
  //       productName: "Airbrush Matte",
  //       productDescription: "Skin-perfecting bronzed filter for the face.",
  //       productPrice: 100.00,
  //       productRate: 2,
  //     },
  //     {
  //       id:4,
  //       haveSale: true,
  //       imgURL: "assets/images/product.png",
  //       productName: "Airbrush Matte",
  //       productDescription: "Skin-perfecting bronzed filter for the face.",
  //       productPrice: 50.00,
  //       productRate: 4,
  //       sale: 15
  //     },
  //     {
  //       id:5,
  //       haveSale: false,
  //       imgURL: "assets/images/product.png",
  //       productName: "Airbrush Matte",
  //       productDescription: "Skin-perfecting bronzed filter for the face.",
  //       productPrice: 60.00,
  //       productRate: 3,
  //     },
  //     {
  //       id:6,
  //       haveSale: true,
  //       imgURL: "assets/images/product.png",
  //       productName: "Airbrush Matte",
  //       productDescription: "Skin-perfecting bronzed filter for the face.",
  //       productPrice: 100.00,
  //       productRate: 2,
  //       sale: 10
  //     },

  //   ]
        let api_key = localStorage.getItem('eToken');
        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`});
        const requestOptions = { headers: headers };

    this._ProductServiseService.GetDataOfProduct(requestOptions).subscribe((data) =>
      {
        this.spinner.show(); // Show spinner
        console.log(data.data)

        this.products=data.data.products;

        this.spinner.hide();

      },(err)=>{
        this.spinner.hide();
      });




    }

}
