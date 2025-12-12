import { Component, computed, inject, input } from '@angular/core';
import { IProduct } from '../../../../../core/models/iproduct';
import { ViewPanel } from '../../../../../core/directives/view-panel';
import { StarRating } from '../../../shared/star-rating/star-rating';
import { RatingSummary } from './rating-summary/rating-summary';
import { ViewReviewsItem } from './view-reviews-item/view-reviews-item';
import { MatButton } from '@angular/material/button';
import { EcommerceStore } from '../../../../../ecommmerce-store';
import { WriteReview } from "./write-review/write-review";

@Component({
  selector: 'app-view-reviews',
  imports: [ViewPanel, StarRating, RatingSummary, ViewReviewsItem, MatButton, WriteReview],
  templateUrl: './view-reviews.html',
  styleUrl: './view-reviews.css',
})
export class ViewReviews {
  store = inject(EcommerceStore);
  product = input.required<IProduct>();
  sortedReviews = computed(() => {
    return [...this.product().reviews].sort(
      (a, b) => b.reviewDate.getTime() - a.reviewDate.getTime()
    );
  });
}
