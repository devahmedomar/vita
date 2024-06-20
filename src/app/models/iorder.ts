export interface IOrder {
    orderItems: IOrderItem[];
    coupon: string;
  }
  
  export interface IOrderItem {
    productId: number;
    quantity: number;
  }
 