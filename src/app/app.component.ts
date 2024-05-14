import { Component, OnInit } from '@angular/core';
import { Ilanguage } from './models/ilanguage';
interface MenuItem{
  label:string,
  icon:string,
  items?:Object[],
  badge?:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vitaparapharma';
  cities: Ilanguage[]=[];

  selectedCity1: Ilanguage={name:""};

  ngOnInit(): void {
    this.cities = [
      {name: 'New York'},
      {name: 'Rome'},

  ];

  }

}
