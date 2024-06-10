import { Component, OnInit } from '@angular/core';
import { Iproductcard } from 'src/app/models/iproductcard';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent implements OnInit{
  relatedProducts:Iproductcard[]=[];
  ngOnInit(): void {
    // this.relatedProducts=[
    //   {
    //     id:10,
    //     haveSale: false,
    //     imgURL: "assets/images/product.png",
    //     productName: "Airbrush Matte",
    //     productDescription: "Skin-perfecting bronzed filter for the face.",
    //     productPrice: 50.00,
    //     productRate: 4,

    //   },
    //   {
    //     id:11,
    //     haveSale: false,
    //     imgURL: "assets/images/product.png",
    //     productName: "Airbrush Matte",
    //     productDescription: "Skin-perfecting bronzed filter for the face.",
    //     productPrice: 60.00,
    //     productRate: 3,
    //     sale: 14
    //   },
    //   {
    //     id:12,
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
