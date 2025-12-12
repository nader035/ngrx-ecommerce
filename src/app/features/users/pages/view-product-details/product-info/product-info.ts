import { Component, inject, input, signal } from '@angular/core';
import { IProduct } from '../../../../../core/models/iproduct';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { StockStatus } from '../stock-status/stock-status';
import { MatDivider } from '@angular/material/divider';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { ToggleWishlistButton } from '../../../shared/toggle-wishlist-button/toggle-wishlist-button';
import { EcommerceStore } from '../../../../../ecommmerce-store';
import { StarRating } from "../../../shared/star-rating/star-rating";

@Component({
  selector: 'app-product-info',
  imports: [
    TitleCasePipe,
    MatIcon,
    StockStatus,
    MatDivider,
    MatIconButton,
    MatAnchor,
    ToggleWishlistButton,
    CurrencyPipe,
    StarRating
],
  templateUrl: './product-info.html',
  styleUrl: './product-info.css',
})
export class ProductInfo {
  product = input.required<IProduct>();
  store = inject(EcommerceStore);
  quantity = signal(1);
}
