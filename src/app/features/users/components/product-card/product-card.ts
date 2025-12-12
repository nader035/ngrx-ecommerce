import { Component, computed, inject, input, output } from '@angular/core';
import { IProduct } from '../../../../core/models/iproduct';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { RouterLink } from "@angular/router";
import { StarRating } from "../../shared/star-rating/star-rating";

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, MatAnchor, MatIcon, RouterLink, StarRating],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<IProduct>();
  addToCartClicked = output<IProduct>();
  store = inject(EcommerceStore);
}
