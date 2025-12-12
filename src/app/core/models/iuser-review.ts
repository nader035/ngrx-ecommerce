export interface IuserReview {
  id: string;
  productId: string;
  userName: string;
  userImageUrl: string;
  rating: number;
  title: string;
  comment: string;
  reviewDate: Date;
}
export type addReviewParams = Pick<IuserReview, 'title' | 'comment' | 'rating'>;
