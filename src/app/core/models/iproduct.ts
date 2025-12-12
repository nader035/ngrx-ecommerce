import { IuserReview } from './iuser-review';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isFavorite: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
  reviews: IuserReview[];
}
