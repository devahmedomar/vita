import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Ibreadcrumb } from 'src/app/models/ibreadcrumb';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  ordersToShow: any[] = [];
  ordersBreadCrumbData: Ibreadcrumb = {
    title: 'ORDERS',
    prev: 'home',
  };

  currentPage: number = 1;
  ordersPerPage: number = 10;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe(
      (response: any) => {
        if (response.success) {
          response.data.orders.sort((a: any, b: any) => {
            return (
              new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
            );
          });

          this.orders = response.data.orders.map(
            (order: any, index: number) => ({
              orderNumber: response.data.orders.length - index,
              productName: order.orderItems
                .map((item: any) => item.productName)
                .join(', '),
              totalAmount: order.totalAmount,
              orderStatus: order.orderStatus,
              orderDate: new Date(order.orderDate).toLocaleDateString(),
              shipmentDate:
                order.shipmentDate !== 'Pending...'
                  ? new Date(order.shipmentDate).toLocaleDateString()
                  : order.shipmentDate,
              trackingNumber:
                order.trackingNumber !== 'Pending...'
                  ? order.trackingNumber
                  : 'Not Available',
              country: order.country,
              city: order.city,
              region: order.region,
              description: order.description,
              zipCode: order.zipCode,
              customerPhone: order.customerPhone,
              shipCost: order.shipCost,
              orderItems: order.orderItems.map((item: any) => ({
                productName: item.productName,
                unitPrice: item.unitPrice,
                quantity: item.quantity,
                totalPrice: item.totalPrice,
                pictureUrl: item.pictureUrl,
              })),
            })
          );

          this.updatePagination();
        } else {
          console.error('Failed to fetch orders:', response.message);
        }
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Canceled':
        return 'badge bg-danger';
      case 'Prepared':
        return 'badge bg-warning text-dark';
      case 'Delivered':
        return 'badge bg-success';
      default:
        return 'badge bg-primary';
    }
  }

  getTotalPages(): number[] {
    return Array.from(
      { length: Math.ceil(this.orders.length / this.ordersPerPage) },
      (_, i) => i + 1
    );
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  onNextPage() {
    if (this.currentPage < this.getTotalPages().length) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.ordersPerPage;
    const endIndex = startIndex + this.ordersPerPage;
    this.ordersToShow = this.orders.slice(startIndex, endIndex);
  }
}
