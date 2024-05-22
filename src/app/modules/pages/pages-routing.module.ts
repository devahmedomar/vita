import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  {path:"home",redirectTo:"",pathMatch:"full"},
  {path:"",component:HomeComponent,title:"Home"},
  {path:"about",component:AboutComponent,title:"About Us"},
  {path:"contact",component:ContactComponent,title:"Contact Us"},
  {path:"faq",component:FaqComponent,title:"FAQ"},
  {path:"privacy",component:PrivacyComponent,title:"Privacy"},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
