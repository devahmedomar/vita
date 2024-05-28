import { Iproductcard } from './../../../../models/iproductcard';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iProduct } from '../../../../models/iproduct';
import { ProductService } from 'src/app/services/product/product.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  singleProduct:any;
  safeProductDescription: SafeHtml = '';

  constructor(private route:ActivatedRoute,private _ProductService:ProductService, private sanitizer: DomSanitizer) { }
  relatedProducts:Iproductcard[]=[]

  getSingleProduct(){
    this._ProductService.getSingleProduct(+this.productId).subscribe({
      next:(res)=>{
        this.singleProduct = res.data.product;
        this.safeProductDescription = this.sanitizer.bypassSecurityTrustHtml(this.singleProduct.description);

      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
      this.productId=params.get('id')!;
    })

    this.getSingleProduct()

  }

}
