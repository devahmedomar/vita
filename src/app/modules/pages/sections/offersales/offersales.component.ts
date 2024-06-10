import { Component, OnInit } from '@angular/core';
import { iOfferProductsObj } from '../../../../models/iproduct';
import { OfferProductsService } from 'src/app/services/home/offer-products.service';

@Component({
  selector: 'app-offersales',
  templateUrl: './offersales.component.html',
  styleUrls: ['./offersales.component.css']
})
export class OffersalesComponent implements OnInit {
  offerProducts:iOfferProductsObj={message:'',success:false,data:{count:0,products:[]}};

  constructor(private _OfferProductsService:OfferProductsService){}
  getOfferProducts(){
    this._OfferProductsService.getOfferProducts().subscribe({
    next:(data:iOfferProductsObj)=>{
      this.offerProducts = data;

    },
    error:(err:any)=>{
      console.log(err);

    },
    complete:()=>{}

    })
  }
  ngOnInit(): void {
    this.getOfferProducts();
  }

}
