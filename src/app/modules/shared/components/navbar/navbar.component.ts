import { LoginComponent } from './../../../auth/components/login/login.component';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Ilanguage } from 'src/app/models/ilanguage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() Islogin: any;
  
  constructor(private _Renderer2: Renderer2 ,  private el: ElementRef) {}
  
}
