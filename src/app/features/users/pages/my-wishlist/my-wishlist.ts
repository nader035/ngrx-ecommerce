import { Component, inject } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { ProductCard } from '../../components/product-card/product-card';
import { IProduct } from '../../../../core/models/iproduct';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatIconButton, MatAnchor, RouterLink],
  templateUrl: './my-wishlist.html',
  styleUrl: './my-wishlist.css',
})
export class MyWishlist {
  store = inject(EcommerceStore);
  removeFromWishlist(product: IProduct) {
    this.store.removeFromWishList(product);
  }
}
