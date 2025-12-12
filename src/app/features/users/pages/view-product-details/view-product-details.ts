import { Component, computed, effect, inject, input } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { ProductInfo } from './product-info/product-info';
import { ViewPanel } from "../../../../core/directives/view-panel";
import { ViewReviews } from "./view-reviews/view-reviews";

@Component({
  selector: 'app-view-product-details',
  imports: [BackButton, ProductInfo, ViewPanel, ViewReviews],
  templateUrl: './view-product-details.html',
  styleUrl: './view-product-details.css',
})
export class ViewProductDetails {
  productId = input.required<string>();
  store = inject(EcommerceStore);
  constructor() {
    this.store.setProductId(this.productId);
  }

  backRoute = computed(() => `/users/products/${this.store.selectedProduct()?.category}`);
}
