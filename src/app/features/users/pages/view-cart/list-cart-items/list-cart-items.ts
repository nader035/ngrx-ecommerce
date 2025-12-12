import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../../../core/directives/view-panel';
import { EcommerceStore } from '../../../../../ecommmerce-store';
import { CartItem } from "./cart-item/cart-item";

@Component({
  selector: 'app-list-cart-items',
  imports: [ViewPanel, CartItem],
  templateUrl: './list-cart-items.html',
  styleUrl: './list-cart-items.css',
})
export class ListCartItems {
  store = inject(EcommerceStore);
}
