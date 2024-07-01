import { Component, OnInit } from '@angular/core';
import { Ilanguage } from './models/ilanguage';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(private translate:TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use(localStorage.getItem('lang')||'en')
  }
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
