import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {
  orders: any;
  lastOrder: any | null = null;
  paymentMethod: string = 'Cash on delivery';
  placeorderBread:Ibreadcrumb={
    prev:"home",
    title:"check out"
  }

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
    }
  
    loadOrders() {
      this.orderService.getAllOrders().subscribe(
        (response: any) => {
          if (response.success && response.data && response.data.orders) {
            const orders = response.data.orders;
            orders.sort((a: any, b: any) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());
            this.lastOrder = orders.length > 0 ? orders[0] : null;
          } else {
            console.error('Invalid orders data format:', response);
          }
        },
        (error) => {
          console.error('Failed to fetch orders:', error);
        }
      );
    }
  
  getSubtotal(order: any): number {
    return order.orderItems.reduce((acc: number, item: any) => {
      return acc + item.totalPrice;
    }, 0);
  }

  getTotal(order: any): number {
    return this.getSubtotal(order) + order.shipCost;
  }
}
