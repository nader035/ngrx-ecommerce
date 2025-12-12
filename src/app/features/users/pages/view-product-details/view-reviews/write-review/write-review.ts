import { Component, inject, signal } from '@angular/core';
import { ViewPanel } from '../../../../../../core/directives/view-panel';
import { MatLabel, MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OptionItem } from '../../../../../../core/models/option-item';
import { MatAnchor } from '@angular/material/button';
import { EcommerceStore } from '../../../../../../ecommmerce-store';
import { addReviewParams } from '../../../../../../core/models/iuser-review';

@Component({
  selector: 'app-write-review',
  imports: [
    ViewPanel,
    MatFormFieldModule,
    MatLabel,
    MatInput,
    MatSelectModule,
    ReactiveFormsModule,
    MatAnchor,
  ],
  templateUrl: './write-review.html',
  styleUrl: './write-review.css',
})
export class WriteReview {
  store = inject(EcommerceStore);
  fb = inject(NonNullableFormBuilder);
  ratingOption = signal<OptionItem[]>([
    { label: '5 Stars - Excellent', value: 5 },
    { label: '4 Stars - Good', value: 4 },
    { label: '3 Stars - Average', value: 3 },
    { label: '2 Stars - Poor', value: 2 },
    { label: '1 Stars - Terrible', value: 1 },
  ]);
  reviewForm = this.fb.group({
    title: ['', Validators.required],
    comment: ['', Validators.required],
    rating: [5, Validators.required],
  });
  saveReview() {
    if (this.reviewForm.invalid) {
      this.reviewForm.markAllAsTouched;
      return;
    }
    const { title, comment, rating } = this.reviewForm.value;
    this.store.addReview({ title, comment, rating } as addReviewParams);
  }
}
