export interface IReview {
    reviewId: number;
    productId: number;
    rating: number;
    comment: string;
    email: string;
    dateCreated: Date;
}