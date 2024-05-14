import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './sections/hero/hero.component';
import { OffersalesComponent } from './sections/offersales/offersales.component';
import { SaleComponent } from './sections/sale/sale.component';
import { BestsellerComponent } from './sections/bestseller/bestseller.component';
import { GreenComponent } from './sections/green/green.component';
import { LatestArticlesComponent } from './sections/latest-articles/latest-articles.component';
import { AdsComponent } from './sections/ads/ads.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FaqComponent,
    PrivacyComponent,
    HomeComponent,
    HeroComponent,
    OffersalesComponent,
    SaleComponent,
    BestsellerComponent,
    GreenComponent,
    LatestArticlesComponent,
    AdsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class PagesModule { }
