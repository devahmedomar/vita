import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TermsComponent } from './components/terms/terms.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {path:"home",redirectTo:"",pathMatch:"full"},
  {path:"",component:HomeComponent,title:"Home"},
  {path:"about",component:AboutComponent,title:"About Us"},
  {path:"contact",component:ContactComponent,title:"Contact Us"},
  {path:"faq",component:FaqComponent,title:"FAQ"},
  {path:"terms",component:TermsComponent,title:"Terms"},
  {path:"privacy",component:PrivacyComponent,title:"Privacy"},
  {path:"wishlist",component:WishlistComponent,title:"Wishlist", canActivate: [authGuard]},
  {path:"orders",component:OrdersComponent,title:"Orders", canActivate: [authGuard]},
  {path:"search",component:SearchComponent,title:"Search"},
  {path:"profile",component:ProfileComponent,title:"Profile", canActivate: [authGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
