export interface IOrderItem {
  productId: number;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  productName: string;
  pictureUrl: string;
}

export interface IOrder {
  orderId: number;
  orderStatus: string;
  orderDate: string;
  shipmentDate: string;
  totalAmount: number;
  trackingNumber: string;
  country: string;
  city: string;
  region: string;
  description: string;
  zipCode: number;
  customerPhone: string;
  orderItems: IOrderItem[];
  coupons: any;
  shipCost: number;
}

export interface Root {
  success: boolean;
  message: string;
  data: {
    order: IOrder;
  };
}
