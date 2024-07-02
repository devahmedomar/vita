import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Ibutton } from 'src/app/models/ibutton';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  lang:string='';
  heroButtonData: Ibutton ={
    content:"",
    link:""
  }
  private langChangeSubscription: Subscription=new Subscription();
  constructor(private translate: TranslateService) {

  }
  private updateButtonContent(): void {
    this.translate.get('shop_now').subscribe((res: string) => {
      this.heroButtonData.content = res;
      this.heroButtonData.link = "shop"
    });
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.lang);
    this.updateButtonContent();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.updateButtonContent();
    });

  }
  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }


}
