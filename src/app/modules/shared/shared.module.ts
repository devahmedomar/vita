import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './components/button/button.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FloorPipe } from '../../pipes/floor.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    ProductcardComponent,
    BreadcrumbComponent,
    FloorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BadgeModule,
    ButtonModule,
    RatingModule,
    CardModule,
    BreadcrumbModule,



  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    ProductcardComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
