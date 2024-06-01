import { Component, OnInit } from '@angular/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private _ContactService:ContactService){}
  contactBreadCrumbData:Ibreadcrumb={
    prev:"home",
    title:"contact us"
  }
  sendMessage(){

    // this._ContactService.contactus( )

  }
  ngOnInit(): void {
    this.sendMessage();
  }


}
