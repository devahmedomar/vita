import { Component } from '@angular/core';
import { Ibutton } from 'src/app/models/ibutton';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroButtonData:Ibutton={
    content:"shop now",
    link:"shop"
  }

}
