import { Component, Input } from '@angular/core';
import { Ibutton } from 'src/app/models/ibutton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonData:Ibutton={content:"",link:""};
}
