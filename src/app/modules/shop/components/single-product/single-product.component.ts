import { Iproductcard } from './../../../../models/iproductcard';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  rate:number=4;
  prodNumber:number=1;
  activeIndex:number=0;
  productId:string="";

  constructor(private route:ActivatedRoute) { }
  relatedProducts:Iproductcard[]=[]
  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
      this.productId=params.get('id')!;
      this.relatedProducts=[
        {
          id:10,
          haveSale: false,
          imgURL: "assets/images/product.png",
          productName: "Airbrush Matte",
          productDescription: "Skin-perfecting bronzed filter for the face.",
          productPrice: 50.00,
          productRate: 4,

        },
        {
          id:11,
          haveSale: false,
          imgURL: "assets/images/product.png",
          productName: "Airbrush Matte",
          productDescription: "Skin-perfecting bronzed filter for the face.",
          productPrice: 60.00,
          productRate: 3,
          sale: 14
        },
        {
          id:12,
          haveSale: false,
          imgURL: "assets/images/product.png",
          productName: "Airbrush Matte",
          productDescription: "Skin-perfecting bronzed filter for the face.",
          productPrice: 100.00,
          productRate: 2,
          sale: 10
        }

      ]
      console.log(this.productId);

    })


  }

}
