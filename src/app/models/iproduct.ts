export interface iOfferProductsObj {
  success: boolean;
  message: string;
  data: iOfferProductList;
}
export interface iOfferProductList {
  products: iProduct[];
  count: number;
}
export interface iProduct {
  name: string;
  description: string;
  about: string;
  productId: number;
  categoryId: number;
  mainCategoryId: number;
  stockQuantity: number;
  reviews: number;
  priceBeforeDiscount: number;
  priceAfterDiscount: number;
  rating: number;
  weight: number;
  pictures: string[];
  tags: any[];
  inWishlist: boolean;
  inCart: boolean;
  discount: boolean;
}
