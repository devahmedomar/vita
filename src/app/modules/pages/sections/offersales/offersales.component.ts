import { Component, OnInit } from '@angular/core';
import { iOfferProductsObj } from '../../../../models/iproduct';
import { OfferProductsService } from 'src/app/services/home/offer-products.service';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-offersales',
  templateUrl: './offersales.component.html',
  styleUrls: ['./offersales.component.css']
})
export class OffersalesComponent implements OnInit {
  private langChangeSubscription: Subscription = new Subscription();
  offerProducts:iOfferProductsObj={message:'',success:false,data:{count:0,products:[]}};

  constructor(private _OfferProductsService:OfferProductsService,private translate:TranslateService){}
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
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.getOfferProducts();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

}
