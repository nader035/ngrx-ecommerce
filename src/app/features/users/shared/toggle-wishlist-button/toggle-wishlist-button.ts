import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { IProduct } from '../../../../core/models/iproduct';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  templateUrl: './toggle-wishlist-button.html',
  styleUrl: './toggle-wishlist-button.css',
})
export class ToggleWishlistButton {
  store = inject(EcommerceStore);
  product = input.required<IProduct>();
  isInWishList = computed(() => this.store.wishlistItems().find((p) => p.id === this.product().id));
  toggleWishList(product: IProduct) {
    if (this.isInWishList()) {
      this.store.removeFromWishList(product);
    } else {
      this.store.addToWishList(product);
    }
    console.log(this.store.wishlistItems());
  }
}
