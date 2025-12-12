import { Component, input } from '@angular/core';
import { IuserReview } from '../../../../../../core/models/iuser-review';
import { ViewPanel } from '../../../../../../core/directives/view-panel';
import { StarRating } from '../../../../shared/star-rating/star-rating';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-reviews-item',
  imports: [ViewPanel, StarRating, DatePipe],
  templateUrl: './view-reviews-item.html',
  styleUrl: './view-reviews-item.css',
})
export class ViewReviewsItem {
  review = input.required<IuserReview>();
}
