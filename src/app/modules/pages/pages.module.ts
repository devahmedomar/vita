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
import { MissionComponent } from './sections/mission/mission.component';
import { FeaturesComponent } from './sections/features/features.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TermsComponent } from './components/terms/terms.component';


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
    AdsComponent,
    MissionComponent,
    FeaturesComponent,
    WishlistComponent,
    OrdersComponent,
    SearchComponent,
    ProfileComponent,
    TermsComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CarouselModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
