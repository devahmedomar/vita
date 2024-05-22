import { Component } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {
  placeorderBread:Ibreadcrumb={
    prev:"home",
    title:"check out"
  }

}
