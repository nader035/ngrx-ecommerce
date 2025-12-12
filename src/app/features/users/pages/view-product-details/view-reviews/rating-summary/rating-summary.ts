import { Component, computed, input } from '@angular/core';
import { IProduct } from '../../../../../../core/models/iproduct';
import { StarRating } from '../../../../shared/star-rating/star-rating';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating-summary',
  imports: [StarRating, MatIcon],
  templateUrl: './rating-summary.html',
  styleUrl: './rating-summary.css',
})
export class RatingSummary {
  product = input.required<IProduct>();
  totalReviews = computed(() => this.product().reviews.length);
  ratingBreakdown = computed(() => {
    const reviews = this.product().reviews;
    const total = reviews.length;
    if (total == 0)
      return [5, 4, 3, 2, 1].map((star) => ({
        star,
        count: 0,
        percentage: 0,
      }));
    else {
      const counts = [5, 4, 3, 2, 1].map((star) => {
        const count = reviews.filter((review) => review.rating === star).length;
        return {
          star,
          count,
          percentage: (count / total) * 100,
        };
      });
      return counts;
    }
  });
}
