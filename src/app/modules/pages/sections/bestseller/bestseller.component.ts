import { Component, OnInit } from '@angular/core';
import { Iproductcard } from 'src/app/models/iproductcard';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {
  bestSeller:Iproductcard[]=[];
  ngOnInit(): void {
    // this.bestSeller=[
    //   {
    //     id:1,
    //     haveSale: false,
    //     imgURL: "assets/images/product.png",
    //     productName: "Airbrush Matte",
    //     productDescription: "Skin-perfecting bronzed filter for the face.",
    //     productPrice: 50.00,
    //     productRate: 4,

    //   },
    //   {
    //     id:2,
    //     haveSale: false,
    //     imgURL: "assets/images/product.png",
    //     productName: "Airbrush Matte",
    //     productDescription: "Skin-perfecting bronzed filter for the face.",
    //     productPrice: 60.00,
    //     productRate: 3,
    //     sale: 14
    //   },
    //   {
    //     id:3,
    //     haveSale: false,
    //     imgURL: "assets/images/product.png",
    //     productName: "Airbrush Matte",
    //     productDescription: "Skin-perfecting bronzed filter for the face.",
    //     productPrice: 100.00,
    //     productRate: 2,
    //     sale: 10
    //   }

    // ]
  }
}
