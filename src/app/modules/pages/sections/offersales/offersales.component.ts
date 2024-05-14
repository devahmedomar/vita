import { Component, OnInit } from '@angular/core';
import { Iproductcard } from 'src/app/models/iproductcard';

@Component({
  selector: 'app-offersales',
  templateUrl: './offersales.component.html',
  styleUrls: ['./offersales.component.css']
})
export class OffersalesComponent implements OnInit {
  offersales:Iproductcard[]=[];
  ngOnInit(): void {
    this.offersales=[
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
        haveSale: true,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 100.00,
        productRate: 2,
        sale: 10
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
        haveSale: true,
        imgURL: "assets/images/product.png",
        productName: "Airbrush Matte",
        productDescription: "Skin-perfecting bronzed filter for the face.",
        productPrice: 60.00,
        productRate: 3,
        sale: 14
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
