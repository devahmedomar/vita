import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { IOrder, Root } from 'src/app/models/iorder';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  orderId: number = 0;
  orderDetails: any;
  orderDetailsBreadCrumbData: Ibreadcrumb = {
    title: 'notification',
    prev: 'home',
  };
  constructor(private router: ActivatedRoute, private translate: TranslateService, private _OrderService: OrderService) {
    // this.getNotificationId();
  }
  getOrderById() {
    this._OrderService.getOrderById(this.orderId).subscribe((res: any) => {
      if (res.success) {
        this.orderDetails = res.data.order;
      }
    });
  }

  getNotificationId() {
    this.router.paramMap.subscribe((params) => {
      this.orderId = +params.get("orderId")!;
      this.getNotificationsById()
    })
  }
  getNotificationsById() {
    this._OrderService.getOrderById(this.orderId).subscribe((res: any) => {
      if (res.success) {
        this.orderDetails = res.data.order;
      }


    })
  }
  ngOnInit(): void {
    this.getNotificationId();
    // this.getNotificationsById();

  }

}
