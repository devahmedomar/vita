import { Component, OnInit } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { Iproductcard } from 'src/app/models/iproductcard';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopBreadCrumbData: Ibreadcrumb = {
    title: "shop",
    prev: "home"
  }
  products:Iproductcard[]=[]
  ngOnInit(): void {
    this.products=[
      {
        haveSale: true,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 50.00,
        productRate: 4,
        sale: 15
      },
      {
        haveSale: true,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 60.00,
        productRate: 3,
        sale: 14
      },
      {
        haveSale: false,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 100.00,
        productRate: 2,
      },
      {
        haveSale: true,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 50.00,
        productRate: 4,
        sale: 15
      },
      {
        haveSale: false,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 60.00,
        productRate: 3,
      },
      {
        haveSale: true,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 100.00,
        productRate: 2,
        sale: 10
      },

    ]
  }


}
